import ROECalculatorClient from '@/components/sections/ROECalculatorClient';

export const metadata = {
  title: 'Smart Home Composting ROE Calculator | Rawbin',
  description: 'Calculate your Return on Environment (ROE), annual carbon emission savings, and organic compost yield with Rawbin.',
  keywords: 'smart composter calculator, composting impact, co2 savings calculator, home composter yield, rawbin environment return'
};

export default function ROECalculatorPage() {
  return <ROECalculatorClient />;
}
