import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useBasket } from './site-shell';
import { money, type Pizza } from '@/lib/pizzeria';
import menuImage from '@/assets/pizza-menu.jpg';
export function PizzaCard({ pizza }: { pizza: Pizza }) {
  const { add } = useBasket();
  return <article className="group min-w-0">
    <div className={`pizza-photo crop-${pizza.crop}`}><img src={menuImage} alt={pizza.name} width={1024} height={1024} loading="lazy" /><span className="pizza-tag">{pizza.tag}</span></div>
    <div className="pt-5"><div className="flex items-baseline justify-between gap-2"><h3 className="font-display text-[28px] font-bold uppercase">{pizza.name}</h3><span className="font-semibold text-sm">{money(pizza.price)}</span></div><p className="text-muted-foreground text-xs leading-6 mt-2 min-h-12">{pizza.description}</p><div className="flex items-center justify-between mt-4 pt-3 border-t border-border"><span className="text-[10px] uppercase text-muted-foreground font-medium">12-inch · Wood-fired</span><Button variant="ghost" size="sm" onClick={() => add(pizza)} aria-label={`Add ${pizza.name} to basket`} className="text-primary font-semibold">Add to order <Plus /></Button></div></div>
  </article>;
}
