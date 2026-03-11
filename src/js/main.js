const toggle = document.getElementById('mobile-menu-toggle');
const menu = document.getElementById('mobile-menu');
const panel = document.getElementById('mobile-menu-panel');
const closeButtons = document.querySelectorAll('[data-mobile-menu-close]');
const header = document.getElementById('site-header');
const heroSentinel = document.getElementById('hero-sentinel');

if (header && heroSentinel) {
  const stickyClasses = [
    'fixed',
    'bg-[#f5efe9]/95',
    'backdrop-blur',
    'border-b',
    'border-[#e8d9cc]/70',
    'shadow-[0_12px_30px_rgba(58,47,42,0.12)]',
    'is-sticky',
  ];
  const heroClasses = ['absolute'];

  const setSticky = (isSticky) => {
    if (isSticky) {
      header.classList.remove(...heroClasses);
      header.classList.add(...stickyClasses);
    } else {
      header.classList.remove(...stickyClasses);
      header.classList.add(...heroClasses);
    }
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      setSticky(!entry.isIntersecting);
    },
    { rootMargin: '-80px 0px 0px 0px', threshold: 0 }
  );

  observer.observe(heroSentinel);
}

const revealItems = document.querySelectorAll('[data-reveal]');
if (revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observerInstance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
}

const tabSections = document.querySelectorAll('[data-tabs]');
if (tabSections.length > 0) {
  tabSections.forEach((section) => {
    const tabButtons = section.querySelectorAll('[data-tab]');
    const panels = section.querySelectorAll('[data-tab-panel]');

    if (tabButtons.length === 0 || panels.length === 0) {
      return;
    }

    const setActiveTab = (tabId) => {
      tabButtons.forEach((button) => {
        button.setAttribute('aria-selected', button.dataset.tab === tabId ? 'true' : 'false');
      });

      panels.forEach((panel) => {
        if (panel.dataset.tabPanel === tabId) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    };

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        setActiveTab(button.dataset.tab);
      });
    });

    const defaultTab = section.querySelector('[data-tab][aria-selected="true"]')?.dataset.tab || tabButtons[0].dataset.tab;
    setActiveTab(defaultTab);
  });
}

const whatsappForms = document.querySelectorAll('[data-whatsapp-form]');
if (whatsappForms.length > 0) {
  whatsappForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const number = form.dataset.whatsappNumber;
      if (!number) {
        return;
      }

      const name = form.querySelector('[name=\"name\"]')?.value.trim() || 'Sin nombre';
      const phone = form.querySelector('[name=\"phone\"]')?.value.trim() || 'No especificado';
      const service = form.querySelector('[name=\"service\"]')?.value.trim() || 'No especificado';
      const schedule = form.querySelector('[name=\"schedule\"]')?.value.trim() || 'Flexible';
      const message = form.querySelector('[name=\"message\"]')?.value.trim() || 'Hola, quiero más información.';

      const text = `Hola, soy ${name}.\\nTeléfono: ${phone}.\\nServicio: ${service}.\\nHorario preferido: ${schedule}.\\nMensaje: ${message}`;
      const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

      window.open(url, '_blank');
    });
  });
}

if (toggle && menu && panel) {
  const openMenu = () => {
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.remove('opacity-0', 'pointer-events-none');
    menu.classList.add('opacity-100');
    menu.setAttribute('aria-hidden', 'false');
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.add('opacity-0', 'pointer-events-none');
    menu.classList.remove('opacity-100');
    menu.setAttribute('aria-hidden', 'true');
    panel.classList.remove('translate-x-0');
    panel.classList.add('translate-x-full');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.classList.contains('is-open')) {
      closeMenu();
    }
  });
}
