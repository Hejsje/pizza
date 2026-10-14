import { createContext, useContext, useState, type ReactNode } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowUpRight, ShoppingBag, Menu, X, Plus, Minus, Flame, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { pizzas, money, type Pizza } from '@/lib/pizzeria';

type Basket = { add: (pizza: Pizza) => void };
const BasketContext = createContext<Basket>({ add: () => {} });
export const useBasket = () => useContext(BasketContext);
export function Brand({ footer = false }: { footer?: boolean }) {
  return <span className={`brand ${footer ? 'footer-brand' : ''}`}>FIRE<span className="text-primary">&</span>FLOUR<small>WOOD-FIRED. SOUL-FUELED.</small></span>;
}
export function SiteShell({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState(false);
  const count = Object.values(items).reduce((a, b) => a + b, 0);
  const total = pizzas.reduce((sum, pizza) => sum + pizza.price * (items[pizza.id] ?? 0), 0);
  const add = (pizza: Pizza) => { setItems(prev => ({ ...prev, [pizza.id]: (prev[pizza.id] ?? 0) + 1 })); setNotice(false); setOpen(true); };
  const adjust = (id: string, amount: number) => { setItems(prev => ({ ...prev, [id]: Math.max(0, (prev[id] ?? 0) + amount) })); setNotice(false); };
  const closeNav = () => setMobileOpen(false);
  return <BasketContext.Provider value={{ add }}>
    <header className="bg-background relative z-20 border-b border-border">
      <div className="site-width flex h-[88px] items-center justify-between gap-6">
        <Link to="/" aria-label="Fire and Flour home" onClick={closeNav}><Brand /></Link>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-9">
          <Link to="/menu" className="nav-link">Our Menu</Link><Link to="/our-story" className="nav-link">Our Story</Link><Link to="/visit" className="nav-link">Find Us</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => { setNotice(false); setOpen(true); }} aria-label={`Open basket, ${count} items`} className="relative"><ShoppingBag />{count > 0 && <span className="absolute -right-1 -top-1 rounded-full bg-primary text-primary-foreground text-[10px] h-4 min-w-4">{count}</span>}</Button>
          <Button variant="restaurant" size="restaurant" asChild className="hidden sm:inline-flex"><Link to="/menu">Order online <ArrowUpRight /></Link></Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen}>{mobileOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      {mobileOpen && <nav aria-label="Mobile navigation" className="site-width pb-6 grid gap-3 md:hidden"><Link to="/menu" onClick={closeNav} className="nav-link">Our Menu</Link><Link to="/our-story" onClick={closeNav} className="nav-link">Our Story</Link><Link to="/visit" onClick={closeNav} className="nav-link">Find Us</Link></nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-ink text-on-ink pt-16 pb-6">
      <div className="site-width grid md:grid-cols-[1.5fr_1fr_1fr] gap-10 pb-14">
        <div><Link to="/" aria-label="Fire and Flour home"><Brand footer /></Link><p className="mt-6 text-sm text-on-ink/60">Your neighborhood. Your people. Your pizza.</p></div>
        <div><h3 className="eyebrow mb-5">Come hungry</h3><div className="grid gap-3 text-sm text-on-ink/70"><Link to="/menu">Our menu <ArrowUpRight className="inline size-3" /></Link><Link to="/our-story">Our story</Link><Link to="/visit">Find us</Link></div></div>
        <div><h3 className="eyebrow mb-5">Good times, every day</h3><p className="text-sm text-on-ink/70 leading-7">Mon–Thu · 12pm–10pm<br />Fri–Sat · 12pm–11pm<br />Sunday · 12pm–9pm</p><Link to="/visit" className="inline-flex mt-4 text-sm items-center gap-2">See you at the table <ArrowUpRight className="size-4" /></Link></div>
      </div>
      <div className="site-width border-t border-on-ink/15 pt-6 flex flex-wrap gap-3 justify-between text-[11px] text-on-ink/50"><span>© {new Date().getFullYear()} Fire & Flour. Made with a little fire.</span><span>Sample restaurant concept · Prices in USD</span><span className="flex gap-2 items-center"><Flame className="size-3" /> Always from scratch.</span></div>
    </footer>
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="max-h-[85svh] overflow-y-auto"><DialogTitle className="font-display text-4xl uppercase">Your pizza lineup</DialogTitle><DialogDescription>{count ? `${count} delicious reason${count === 1 ? '' : 's'} to gather around.` : 'Your next favorite pizza is waiting.'}</DialogDescription>
      {count === 0 ? <div className="py-10 text-center"><ShoppingBag className="mx-auto mb-5 size-10 text-muted-foreground" /><p className="mb-5">Nothing in the box. Yet.</p><Button variant="restaurant" onClick={() => setOpen(false)} asChild><Link to="/menu">Explore the menu <ArrowUpRight /></Link></Button></div> : <>
        <div className="divide-y divide-border">{pizzas.filter(p => (items[p.id] ?? 0) > 0).map(p => <div key={p.id} className="flex justify-between items-center gap-3 py-4"><div><h3 className="font-semibold text-sm">{p.name}</h3><p className="text-muted-foreground text-xs mt-1">12-inch · {money(p.price)}</p></div><div className="flex items-center gap-2"><Button variant="outline" size="icon" aria-label={`Remove one ${p.name}`} onClick={() => adjust(p.id, -1)}><Minus /></Button><span className="w-5 text-center text-sm">{items[p.id]}</span><Button variant="outline" size="icon" aria-label={`Add one ${p.name}`} onClick={() => adjust(p.id, 1)}><Plus /></Button></div></div>)}</div>
        <div className="flex justify-between font-semibold border-t border-border pt-4"><span>Subtotal</span><span>{money(total)}</span></div><p className="text-xs text-muted-foreground">Taxes calculated at checkout. All pizzas contain wheat and milk.</p>
        {notice ? <p role="status" className="text-sm bg-secondary p-4">This sample restaurant isn’t accepting live orders. Your basket is ready for a future checkout connection.</p> : <Button variant="restaurant" size="restaurant" onClick={() => setNotice(true)}>Continue to checkout <ArrowUpRight /></Button>}
      </>}
    </DialogContent></Dialog>
  </BasketContext.Provider>;
}
