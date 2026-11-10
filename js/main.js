/* ============ Gabriel Osuna — Portfolio JS ============ */
(() => {
  'use strict';

  /* ---------- Proyectos ---------- */
  const PROJECTS = [
    {
      id:'fonhvim', title:'FONHVIM', cat:'Gubernamental', filter:'gub',
      img:'screenshots/fonhvim-desktop.jpeg',
      desc:'Portal de ayuda social con app interna e API inter-institucional. Gestión completa de solicitudes ciudadanas.',
      tags:['Angular','NestJS','PostgreSQL','Expo','Dokploy'], url:'https://fonhvim.com'
    },
    {
      id:'goexpress', title:'GoExpress', cat:'Movilidad · Delivery', filter:'movilidad',
      img:'screenshots/goexpress-desktop.jpeg',
      desc:'Ecosistema de delivery en tiempo real: apps de motorizado y pasajero con GPS, panel admin, landing y store de APKs.',
      tags:['NestJS','Socket.io','Angular','Next.js','Expo'], url:'https://goexpress.com.ve'
    },
    {
      id:'guachi', title:'GUACHI', cat:'Automatización · SaaS propio', filter:'auto',
      img:'screenshots/guachi-desktop.jpeg',
      desc:'Automatización de compra de divisas en BDVEnláz@ con panel de suscripciones, OTP y control de versiones. En producción desde nov 2026.',
      tags:['Angular','NestJS','Deno','Playwright','Remotion'], url:'https://guachi.goexpress.com.ve'
    },
    {
      id:'arfeseg', title:'ARFESEG', cat:'E-commerce · Seguridad industrial', filter:'ecommerce',
      img:'screenshots/arfeseg-desktop.jpeg',
      desc:'Tienda EPP completa (20+ vistas): catálogo, checkout, admin, pagos Wompi y app móvil Expo. Marca MD SAFETY.',
      tags:['Angular SSR','NestJS','Postgres','Expo','Wompi'], url:'https://www.arfeseg.com'
    },
    {
      id:'rokystore', title:'ROKY Store', cat:'E-commerce · B2B', filter:'ecommerce',
      img:'screenshots/rokystore-desktop.jpeg',
      desc:'E-commerce B2B para distribuidora + panel interno de vendedores con socket en vivo, reportes xlsx y SSR.',
      tags:['Angular SSR','NestJS','PostgreSQL','Docker'], url:'https://rokystore.goexpress.com.ve'
    },
    {
      id:'edanos', title:'EDANOS', cat:'Gubernamental · Protección Civil', filter:'gub',
      img:'screenshots/edanos-desktop.jpeg',
      desc:'Sistema de Evaluación de Daños y Análisis de Necesidades para Protección Civil: captura georreferenciada en campo + centro de mando.',
      tags:['Expo','Angular','NestJS','PostGIS','Mapas'], url:'https://edanosapp.site'
    },
    {
      id:'school', title:'EDANOS School', cat:'Educación · LMS', filter:'gub',
      img:'screenshots/edanos-school-desktop.jpeg',
      desc:'Plataforma e-learning de gestión de riesgos con roles, pagos, certificados PDF y almacenamiento MinIO. El proyecto más maduro: e2e + Swagger.',
      tags:['Angular','NestJS','MinIO','PostgreSQL','Puppeteer'], url:'https://school.edanosapp.site'
    },
    {
      id:'sisvih', title:'SISVIH', cat:'Gubernamental · Municipal', filter:'gub',
      img:'screenshots/sisvih-desktop.jpeg',
      desc:'Sistema integrado de vivienda: urbanismos, créditos, control vehicular, nómina, mapa interactivo y app QR.',
      tags:['Angular','NestJS','Leaflet','Expo','Docker'], url:'https://sisvih.com'
    },
    {
      id:'andinashop', title:'AndinaShop', cat:'E-commerce · Retail', filter:'ecommerce',
      img:'screenshots/andinashop-desktop.jpeg',
      desc:'Tienda de ofertas Adidas con scraping automático de precios, cron de actualización y checkout por WhatsApp.',
      tags:['Angular','NestJS','Cheerio','Cron','Vercel'], url:'https://andinashop.live'
    },
    {
      id:'turisteando', title:'Turisteando PR', cat:'Turismo · ~100 páginas', filter:'ecommerce',
      img:'screenshots/turisteando-desktop.jpeg',
      desc:'Sitio comercial de excursiones en Puerto Rico: kayaks, yates, biobay y snorkel. Catálogo masivo estático de alta performance.',
      tags:['Astro','React','Tailwind','SSG'], url:'https://turisteandoenpuertorico.co'
    },
    {
      id:'boating', title:'Boating Puerto Rico', cat:'Turismo · Charters', filter:'ecommerce',
      img:'screenshots/boating-desktop.jpeg',
      desc:'Landing y reservas de charters privados de bote y yacht en Puerto Rico. De los primeros proyectos internacionales.',
      tags:['Astro','Tailwind','Reservas'], url:'https://boating.edanosapp.site'
    },
    {
      id:'sigesedi', title:'SiGesedi', cat:'Gubernamental · UPTM', filter:'gub',
      img:'screenshots/sigesedi-desktop.jpeg',
      desc:'Sistema de gestión editorial universitaria: documentos, comités, auditoría y flujos de revisión. 25 archivos de test.',
      tags:['Angular','NestJS','Jest','Vitest','Docker'], url:'https://sigesedi.goexpress.com.ve'
    }
  ];

  /* ---------- Render grid ---------- */
  const grid = document.getElementById('projectGrid');
  if (grid) {
    grid.innerHTML = PROJECTS.map(p => `
      <article class="card reveal" data-filter="${p.filter}" data-id="${p.id}" tabindex="0" role="button" aria-label="Ver detalles de ${p.title}">
        <div class="card__media">
          <span class="card__live">En producción</span>
          <img src="${p.img}" alt="${p.title} — captura del sistema" loading="lazy">
        </div>
        <div class="card__body">
          <span class="card__cat">${p.cat}</span>
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${p.desc}</p>
          <div class="card__tags">${p.tags.slice(0,4).map(t => `<span>${t}</span>`).join('')}</div>
          <span class="card__link">Ver detalles →</span>
        </div>
      </article>`).join('');
  }

  /* ---------- Filtros ---------- */
  const filters = document.querySelectorAll('.filter');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      card.classList.toggle('is-hidden', f !== 'all' && card.dataset.filter !== f);
    });
  }));

  /* ---------- Modal ---------- */
  const modal = document.getElementById('modal');
  const openModal = (p) => {
    document.getElementById('modalImg').src = p.img;
    document.getElementById('modalImg').alt = p.title;
    document.getElementById('modalCat').textContent = p.cat;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.desc;
    document.getElementById('modalTags').innerHTML = p.tags.map(t => `<li>${t}</li>`).join('');
    document.getElementById('modalLinks').innerHTML =
      `<a class="btn btn--primary" href="${p.url}" target="_blank" rel="noopener">Visitar sitio</a>`;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  grid?.addEventListener('click', e => {
    const card = e.target.closest('.card');
    if (card) openModal(PROJECTS.find(p => p.id === card.dataset.id));
  });
  grid?.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.card');
      if (card) { e.preventDefault(); openModal(PROJECTS.find(p => p.id === card.dataset.id)); }
    }
  });
  modal?.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ---------- Nav ---------- */
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  addEventListener('scroll', () => nav.classList.toggle('is-scrolled', scrollY > 40), { passive: true });
  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle?.classList.remove('is-open');
  }));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* ---------- Contadores ---------- */
  const counterIO = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, target = +el.dataset.count, dur = 1400, t0 = performance.now();
      const tick = t => {
        const k = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat__num').forEach(el => counterIO.observe(el));

  /* ---------- Año ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Fondo animado: grid TRON ---------- */
  const canvas = document.getElementById('grid-bg');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, dpr, t = 0, raf;

    const resize = () => {
      dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.width = innerWidth * dpr;
      h = canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
    };
    resize();
    addEventListener('resize', () => { resize(); if (reduceMotion) { t = 40; draw(false); } }, { passive: true });

    const stars = Array.from({ length: 60 }, () => ({
      x: Math.random(), y: Math.random(), s: Math.random() * 1.6 + .4, v: Math.random() * .0004 + .0001
    }));

    const draw = (animate = true) => {
      t += 1;
      ctx.clearRect(0, 0, w, h);

      /* estrellas / partículas */
      stars.forEach(st => {
        st.y -= st.v; if (st.y < 0) st.y = 1;
        ctx.globalAlpha = .35 + Math.sin((t + st.x * 400) / 40) * .25;
        ctx.fillStyle = '#9be9ff';
        ctx.fillRect(st.x * w, st.y * h, st.s * dpr, st.s * dpr);
      });
      ctx.globalAlpha = 1;

      /* horizon grid */
      const horizon = h * 0.62;
      const vanishX = w / 2;
      ctx.strokeStyle = 'rgba(0,240,255,.16)';
      ctx.lineWidth = 1 * dpr;

      /* líneas verticales convergentes */
      for (let i = -16; i <= 16; i++) {
        ctx.beginPath();
        ctx.moveTo(vanishX + i * w * 0.09, horizon);
        ctx.lineTo(vanishX + i * w * 0.6, h);
        ctx.stroke();
      }
      /* líneas horizontales en movimiento */
      const speed = (t * 0.9) % 60;
      for (let i = 0; i < 22; i++) {
        const p = (i * 60 + speed) / (22 * 60);
        const y = horizon + Math.pow(p, 2.2) * (h - horizon);
        if (y < horizon) continue;
        ctx.globalAlpha = .06 + p * .18;
        ctx.beginPath();
        ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }
      ctx.globalAlpha = 1;

      /* línea de horizonte */
      const g = ctx.createLinearGradient(0, horizon - 2 * dpr, 0, horizon + 2 * dpr);
      g.addColorStop(0, 'rgba(0,240,255,0)');
      g.addColorStop(.5, 'rgba(0,240,255,.55)');
      g.addColorStop(1, 'rgba(0,240,255,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, horizon - 2 * dpr, w, 4 * dpr);

      if (animate) raf = requestAnimationFrame(() => draw(true));
    };

    if (reduceMotion) {
      /* modo accesibilidad: un solo frame estático, sin bucle */
      t = 40;
      draw(false);
    } else {
      draw(true);
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(raf);
        else raf = requestAnimationFrame(() => draw(true));
      });
    }
  }
})();
