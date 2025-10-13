export function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function makeId() {
  let id = "";
  const numbers = "0123456789";
  for (let i = 0; i < 4; i++) {
    id += numbers.charAt(Math.floor(Math.random() * 10));
  }
  return Number(id);
}
