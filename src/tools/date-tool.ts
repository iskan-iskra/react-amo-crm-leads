import { TiLeadStatus } from "@/types";

export function formatDate(timestamp: number): string {
  // Преобразование timestamp в миллисекунды
  const date = new Date(timestamp * 1000);

  // Извлечение дня, месяца и года
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы начинаются с 0
  const year = date.getFullYear();

  // Форматирование даты в DD.MM.YYYY
  return `${day}.${month}.${year}`;
}

export function getStatusColor(timestamp: number): TiLeadStatus {
  if (!timestamp) {
    return "red";
  }

  const now = new Date();
  const due = new Date(timestamp * 1000);

  // Установим час, минуту и секунду в 00:00 для корректного сравнения
  now.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);

  // Рассчитаем разницу в днях
  const differenceInDays = Math.floor(
    (due.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (differenceInDays < 0) {
    // Задача просрочена
    return "red";
  } else if (differenceInDays === 0) {
    // Задача на сегодня
    return "green";
  } else if (differenceInDays > 0) {
    // Задача через день
    return "yellow";
  } else {
    // В любом другом случае
    return "grey"; // или любой другой цвет
  }
}
