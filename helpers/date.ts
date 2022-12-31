import dayjs from "dayjs";

const defaultLang = "es";
const defaultFormat = "MMM DD, YYYY [at] HH:MM";

export const EasyDayJS = (date: string) => ({
  format: (formatter = defaultFormat) => {
    return dayjs(date).locale(defaultLang).format(formatter);
  },
});
