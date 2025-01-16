<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }
    public function getJWTCustomClaims()
    {
        return [];
    }


    protected $hidden = [
        'password',
        'remember_token',
    ];
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    protected $fillable = [
        'uuid',
        'full_name',
        'username',
        'email',
        'phone_number',
        'avatar_url',
        'thumbnail_url',
        'birthday',
        'address',
        'password',
        'is_blocked',
        'remember_token',
        'bio',
        'email_verified_at',
        'failed_attempts',
        'blocked_until'
    ];
    public function roles()
    {
        $role_ids = UserRole::where('user_id', $this->id)->pluck('role_id');
        return Role::whereIn('id', $role_ids)->pluck('name');
    }
    public function shop()
    {
        return $this->hasOne(Shop::class, 'user_id');
    }
    public function vouchers()
    {
        return $this->hasMany(Voucher::class);
    }
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
    public function total_coin($user_id = null)
    {
        return CoinTransaction::where(['user_id' => $user_id ?? auth('api')->id()])
            ->orderBy('id', 'desc')
            ->value('balance_after') ?? 0;
    }
    public function coin_register($user_id)
    {
        $coin_rule = CoinRule::find(1);
        $transaction_coin = CoinTransaction::create([
            'user_id' => $user_id,
            'name' => $coin_rule->rule_name,
            'amount' => $coin_rule->coin_amount,
            'balance_before' => 0,
            'balance_after' => $coin_rule->coin_amount,
            'description' => $coin_rule->description
        ]);
        $this->send_notify_coin($coin_rule, $transaction_coin, $user_id);
    }

    public function coin_login_daily($user_id)
    {
        $coin_rule = CoinRule::find(2);
        $check_get_coin = CoinTransaction::where('user_id', $user_id)
            ->where('name', $coin_rule->rule_name)
            ->whereDate('created_at', Carbon::today())
            ->exists();
        if (!$check_get_coin) {
            $total_coin = $this->total_coin($user_id);
            $transaction_coin = CoinTransaction::create([
                'user_id' => $user_id,
                'name' => $coin_rule->rule_name,
                'amount' => $coin_rule->coin_amount,
                'balance_before' => $total_coin,
                'balance_after' => $total_coin + $coin_rule->coin_amount,
                'description' => $coin_rule->description
            ]);
            $this->send_notify_coin($coin_rule, $transaction_coin, $user_id);
        }
    }
    public function send_notify_coin($coin_rule, $transaction_coin, $user_id)
    {
        $notify = Notification::create([
            'title' => $coin_rule->description,
            'message' => "Bạn đã nhận được " . $coin_rule->coin_amount . " khi " . $coin_rule->rule_name,
            'from' => 'COIN',
            'to' => 'WEB',
            'sent_type' => "IMMEDIATE",
            'status' => "SENT",
            'type_target' => "USER",
            'data_id' => $transaction_coin->id
        ]);
        NotificationHistory::create([
            'notification_id' => $notify->id,
            'user_id' => $user_id,
        ]);
    }
}
