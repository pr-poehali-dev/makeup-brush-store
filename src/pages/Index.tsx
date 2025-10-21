import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const products = [
    {
      id: 1,
      name: 'Tuxur Brushe',
      category: 'FERQUINS',
      price: 3400,
      image: 'https://cdn.poehali.dev/projects/ed43cede-4056-401e-a1f7-9e0e4933dde1/files/7997cea6-851c-4e2b-aaf5-b75d65c983e5.jpg'
    },
    {
      id: 2,
      name: 'Professional Set',
      category: 'PREMIUM',
      price: 8900,
      image: 'https://cdn.poehali.dev/projects/ed43cede-4056-401e-a1f7-9e0e4933dde1/files/7653869d-0c8e-49be-9687-2106c566fd89.jpg'
    },
    {
      id: 3,
      name: 'Gold Edition',
      category: 'LUXURY',
      price: 5200,
      image: 'https://cdn.poehali.dev/projects/ed43cede-4056-401e-a1f7-9e0e4933dde1/files/88c49e49-5df2-48d3-a04f-8dba6c679134.jpg'
    },
    {
      id: 4,
      name: 'Blending Brush',
      category: 'ESSENTIAL',
      price: 2800,
      image: 'https://cdn.poehali.dev/projects/ed43cede-4056-401e-a1f7-9e0e4933dde1/files/7997cea6-851c-4e2b-aaf5-b75d65c983e5.jpg'
    }
  ];

  const renderHome = () => (
    <div className="space-y-16">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="relative text-center px-4 max-w-4xl animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            LUXURY BRUSHES
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
            Премиальные кисти для безупречного макияжа
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium tracking-wider"
            onClick={() => setActiveSection('catalog')}
          >
            Смотреть каталог
          </Button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 space-y-4 hover-scale">
            <div className="flex justify-center mb-4">
              <Icon name="Sparkles" size={48} className="text-accent" />
            </div>
            <h3 className="text-2xl font-semibold">Премиальное качество</h3>
            <p className="text-muted-foreground">
              Натуральный ворс высшего качества для идеального нанесения
            </p>
          </div>
          <div className="p-8 space-y-4 hover-scale">
            <div className="flex justify-center mb-4">
              <Icon name="Award" size={48} className="text-accent" />
            </div>
            <h3 className="text-2xl font-semibold">Ручная работа</h3>
            <p className="text-muted-foreground">
              Каждая кисть создается вручную мастерами своего дела
            </p>
          </div>
          <div className="p-8 space-y-4 hover-scale">
            <div className="flex justify-center mb-4">
              <Icon name="Heart" size={48} className="text-accent" />
            </div>
            <h3 className="text-2xl font-semibold">Долговечность</h3>
            <p className="text-muted-foreground">
              Кисти сохраняют форму и качество годами при правильном уходе
            </p>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCatalog = () => (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-5xl font-bold mb-4">Каталог</h2>
        <p className="text-xl text-muted-foreground">Выберите идеальные кисти для вашего образа</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden border-0 shadow-lg hover-scale group">
            <div className="aspect-square overflow-hidden bg-card">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-6 space-y-3">
              <Badge variant="secondary" className="text-xs tracking-wider">
                {product.category}
              </Badge>
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{product.price} ₽</span>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" size={16} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-6">О бренде</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8" />
      </div>
      
      <div className="prose prose-lg mx-auto text-center space-y-6">
        <p className="text-xl leading-relaxed text-foreground">
          Luxury Brushes — это воплощение элегантности и профессионализма в мире инструментов для макияжа.
        </p>
        
        <p className="text-lg leading-relaxed text-muted-foreground">
          Мы создаем кисти, которые сочетают в себе традиционное мастерство и современные технологии. 
          Каждая кисть проходит тщательный контроль качества и создается вручную опытными мастерами.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-4">Наша миссия</h3>
            <p className="text-muted-foreground">
              Предоставить визажистам и ценителям красоты инструменты высочайшего качества, 
              которые помогут создавать безупречный макияж.
            </p>
          </div>
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-4">Наши ценности</h3>
            <p className="text-muted-foreground">
              Качество, инновации, экологичность и уважение к традициям ручного производства — 
              основа нашей философии.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDelivery = () => (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12 animate-fade-in">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-6">Доставка</h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-8" />
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center border-0 shadow-lg">
          <Icon name="Truck" size={48} className="mx-auto mb-4 text-accent" />
          <h3 className="text-xl font-semibold mb-3">По России</h3>
          <p className="text-muted-foreground mb-2">3-7 рабочих дней</p>
          <p className="text-2xl font-bold">Бесплатно</p>
          <p className="text-sm text-muted-foreground">от 5000 ₽</p>
        </Card>
        
        <Card className="p-6 text-center border-0 shadow-lg">
          <Icon name="Plane" size={48} className="mx-auto mb-4 text-accent" />
          <h3 className="text-xl font-semibold mb-3">Международная</h3>
          <p className="text-muted-foreground mb-2">7-14 рабочих дней</p>
          <p className="text-2xl font-bold">от 2000 ₽</p>
          <p className="text-sm text-muted-foreground">зависит от страны</p>
        </Card>
        
        <Card className="p-6 text-center border-0 shadow-lg">
          <Icon name="Store" size={48} className="mx-auto mb-4 text-accent" />
          <h3 className="text-xl font-semibold mb-3">Самовывоз</h3>
          <p className="text-muted-foreground mb-2">На следующий день</p>
          <p className="text-2xl font-bold">Бесплатно</p>
          <p className="text-sm text-muted-foreground">Москва, Тверская 1</p>
        </Card>
      </div>
      
      <Card className="p-8 border-0 shadow-lg bg-card">
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
          <Icon name="Package" size={32} className="text-accent" />
          Условия доставки
        </h3>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
            <span>Доставка курьером по Москве и Санкт-Петербургу — бесплатно при заказе от 3000 ₽</span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
            <span>Отправка заказов ежедневно (кроме воскресенья)</span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
            <span>Упаковка премиум-класса в фирменные коробки с лого</span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
            <span>Возможность выбора даты и времени доставки</span>
          </li>
          <li className="flex items-start gap-3">
            <Icon name="Check" size={20} className="text-accent mt-1 flex-shrink-0" />
            <span>Отслеживание заказа в личном кабинете</span>
          </li>
        </ul>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 
              className="text-2xl font-bold tracking-tight cursor-pointer hover:text-accent transition-colors"
              onClick={() => setActiveSection('home')}
            >
              LUXURY BRUSHES
            </h1>
            <div className="flex items-center gap-8">
              <button
                onClick={() => setActiveSection('home')}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'home' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                Главная
              </button>
              <button
                onClick={() => setActiveSection('catalog')}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'catalog' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'about' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                О бренде
              </button>
              <button
                onClick={() => setActiveSection('delivery')}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'delivery' ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                Доставка
              </button>
              <Button variant="ghost" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                <span className="absolute -top-1 -right-1 bg-accent text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {activeSection === 'home' && renderHome()}
        {activeSection === 'catalog' && renderCatalog()}
        {activeSection === 'about' && renderAbout()}
        {activeSection === 'delivery' && renderDelivery()}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">LUXURY BRUSHES</h3>
              <p className="text-sm text-muted-foreground">
                Премиальные кисти для профессионального макияжа
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>info@luxurybrushes.ru</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Режим работы</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Пн-Пт: 10:00 - 20:00</p>
                <p>Сб-Вс: 11:00 - 18:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={20} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Icon name="Facebook" size={20} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
                <Icon name="Youtube" size={20} className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Luxury Brushes. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
