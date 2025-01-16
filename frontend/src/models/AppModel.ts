export class MFormAddress {
  receiver_name: string;
  phone_number: string;
  address_detail: string;
  province_id: number;
  district_id: number;
  ward_id: number;
  is_default: boolean;
  constructor() {
    this.receiver_name = "";
    this.phone_number = "";
    this.address_detail = "";
    this.province_id = 0;
    this.district_id = 0;
    this.ward_id = 0;
    this.is_default = false;
  }
}
