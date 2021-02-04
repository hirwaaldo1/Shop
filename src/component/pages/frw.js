export default function formatCurrency(num) {
    return "Frw" + Number(num.toFixed(1)).toLocaleString() + " ";
  }