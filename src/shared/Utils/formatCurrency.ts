export default function formatCurrency(currency: number): string {
  const amount = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(currency);

  return amount;
}
