const formatValue = (value: number): string => {
  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(value);
};
// TODO

export default formatValue;
