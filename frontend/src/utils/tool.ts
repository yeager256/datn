import moment from "moment";

export const FormMartDateAgo = (date: string) => {
  let result = moment(date).fromNow();
  result = result.replace("a few seconds ago", "vừa xong");
  result = result.replace("an hour", "1 giờ");
  result = result.replace("a day", "1 ngày");
  result = result.replace("an month", "1 tháng");
  result = result.replace("an year", "1 năm");
  result = result.replace("ago", "trước");
  result = result.replace("a minute", "1 phút");
  result = result.replace("minutes", "phút");
  result = result.replace("hours", "giờ");
  result = result.replace("days", "ngày");
  result = result.replace("months", "tháng");
  result = result.replace("a month", "1 tháng");
  result = result.replace("years", "năm");
  return result;
};
export const FormatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  }).format(price);
};

export const FormatDate = (
  timestamp: string | Date,
  withTime: boolean = false
) => {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  if (withTime) {
    const vietnamOffset = 7 * 60;
    const vietnamTime = new Date(date.getTime() + vietnamOffset * 60 * 1000);
    return vietnamTime.toISOString().slice(0, 19).replace("T", " ");
  } else {
    return `${day}/${month}/${year}`;
  }
};
export const formatDuration = (seconds: number, is_text = true) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (is_text) {
    if (hours == 0) {
      if (minutes == 0) {
        return `${remainingSeconds} giây`;
      }
      return `${minutes} phút:${remainingSeconds} giây`;
    }
    return `${hours} giờ:${minutes} phút:${remainingSeconds} giây`;
  } else {
    if (hours == 0) {
      if (minutes == 0) {
        return `${
          remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
        }`;
      }
      return `${minutes < 10 ? "0" + minutes : minutes} :${
        remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
      } `;
    }
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds} `;
  }
};
export const CompareDateNow = (
  data_start: Date | string,
  data_end: Date | string
) => {
  const dateStart = new Date(data_start);
  const dateEnd = new Date(data_end);
  const now = new Date();

  let status;

  if (now < dateStart) {
    status = "soon";
  } else if (now >= dateStart && now <= dateEnd) {
    status = "running";
  } else {
    status = "outdated";
  }
  return status;
  // const mess:{[key:string]:{[key:string]:string}}={
  //   soon:{
  //     vi:'Sắp diễn ra'
  //   },
  //   running:{
  //     vi:'Đang diễn ra'
  //   },
  //   outdated:{
  //     vi:'Đã kết thúc'
  //   },
  // }
  // return mess[status][lang];
};
export const ConvertOldPrice = (
  price: string | number,
  percent_sale: string | number | null
) => {
  if (percent_sale == 0 || percent_sale == null || percent_sale == "") {
    return;
  }
  const value = Math.round(Math.ceil((+price / (100 - +percent_sale)) * 100));
  if (value > 100000) {
    return FormatPrice(Math.round(value / 1000) * 1000);
  }
  return FormatPrice(value);
};
export const GetPriceSale = (
  price: string | number,
  percent_sale: string | number | null
) => {
  if (percent_sale == 0 || percent_sale == null || percent_sale == "") {
    return;
  }
  const value = Math.round(Math.ceil((+price / (100 - +percent_sale)) * 100));
  if (value > 100000) {
    return FormatPrice(Math.round((value - +price) / 1000) * 1000);
  }
  return FormatPrice(value - +price);
};
export const ParseParams = (data: any) => {
  return new URLSearchParams(
    Object.entries(data).reduce((acc, [key, value]) => {
      acc[key] = String(value);
      return acc;
    }, {} as { [key: string]: string })
  );
};
