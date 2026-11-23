/**
 * ============================================================================
 * ATELIER ONE — JAVASCRIPT APPLICATION LOGIC
 * ============================================================================
 * First-Year Web Development Showcase
 * 
 * Features implemented with vanilla JavaScript:
 * 1. Product Catalog Data Source & State Management
 * 2. Real-time Product Filtering by Category Chips
 * 3. Live Product Search (Synced across header and catalog inputs)
 * 4. Product Sorting (Price Low-to-High, High-to-Low, Discount, Alphabetical)
 * 5. Interactive Shopping Bag (Add, Qty adjustment, Remove, Free Shipping Progress)
 * 6. Wishlist Toggle with live badge count & heart toggle
 * 7. Toast Notification Feedback System
 * 8. Mobile Navigation Hamburger Menu
 * 9. Newsletter Subscription Handler
 * 10. Sticky Header Scroll Detection & Image Fallback Management
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. Product Catalog Data Source (14 Items)
  // --------------------------------------------------------------------------
  const products = [
    {
      id: 1,
      name: 'The Arched Trench Coat',
      category: 'clothing',
      tags: ['new-arrivals', 'sale'],
      price: 340,
      oldPrice: 425,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/trench-coat.svg',
      fallbackAlt: 'assets/images/trench-coat-alt.svg'
    },
    {
      id: 2,
      name: 'Relaxed Merino Wool Knit',
      category: 'clothing',
      tags: ['new-arrivals'],
      price: 195,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/merino-knit.svg',
      fallbackAlt: 'assets/images/merino-knit-alt.svg'
    },
    {
      id: 3,
      name: 'Tailored Pleated Trousers',
      category: 'clothing',
      tags: [],
      price: 220,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/pleated-trousers.svg',
      fallbackAlt: 'assets/images/pleated-trousers-alt.svg'
    },
    {
      id: 4,
      name: 'The Structured Canvas Tote',
      category: 'accessories',
      tags: ['new-arrivals'],
      price: 165,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/canvas-tote.svg',
      fallbackAlt: 'assets/images/canvas-tote-alt.svg'
    },
    {
      id: 5,
      name: 'Square-Toe Leather Loafers',
      category: 'footwear',
      tags: ['sale'],
      price: 280,
      oldPrice: 350,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/leather-loafers.svg',
      fallbackAlt: 'assets/images/leather-loafers-alt.svg'
    },
    {
      id: 6,
      name: 'Double-Breasted Wool Blazer',
      category: 'clothing',
      tags: [],
      price: 390,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/wool-blazer.svg',
      fallbackAlt: 'assets/images/wool-blazer-alt.svg'
    },
    {
      id: 7,
      name: 'Silk Slip Midi Dress',
      category: 'clothing',
      tags: ['new-arrivals'],
      price: 260,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/silk-dress.svg',
      fallbackAlt: 'assets/images/silk-dress-alt.svg'
    },
    {
      id: 8,
      name: 'Minimalist Chelsea Boots',
      category: 'footwear',
      tags: [],
      price: 310,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/chelsea-boots.svg',
      fallbackAlt: 'assets/images/chelsea-boots-alt.svg'
    },
    {
      id: 9,
      name: 'Brushed Alpaca Scarf',
      category: 'accessories',
      tags: ['sale'],
      price: 115,
      oldPrice: 140,
      discount: 18,
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/alpaca-scarf.svg',
      fallbackAlt: 'assets/images/alpaca-scarf-alt.svg'
    },
    {
      id: 10,
      name: 'Clean Monolith Derby Shoes',
      category: 'footwear',
      tags: ['new-arrivals'],
      price: 295,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/derby-shoes.svg',
      fallbackAlt: 'assets/images/derby-shoes-alt.svg'
    },
    {
      id: 11,
      name: 'Architectural Hoop Earrings',
      category: 'accessories',
      tags: [],
      price: 85,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/brass-earrings.svg',
      fallbackAlt: 'assets/images/brass-earrings-alt.svg'
    },
    {
      id: 12,
      name: 'Raw Japanese Denim Jacket',
      category: 'clothing',
      tags: ['sale'],
      price: 245,
      oldPrice: 310,
      discount: 21,
      image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/denim-jacket.svg',
      fallbackAlt: 'assets/images/denim-jacket-alt.svg'
    },
    {
      id: 13,
      name: 'Italian Calfskin Belt',
      category: 'accessories',
      tags: [],
      price: 95,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/calfskin-belt.svg',
      fallbackAlt: 'assets/images/calfskin-belt-alt.svg'
    },
    {
      id: 14,
      name: 'Woven Leather Slides',
      category: 'footwear',
      tags: ['new-arrivals'],
      price: 190,
      oldPrice: null,
      discount: 0,
      image: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=700&q=80',
      altImage: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&w=700&q=80',
      fallback: 'assets/images/woven-slides.svg',
      fallbackAlt: 'assets/images/woven-slides-alt.svg'
    }
  ];

  // --------------------------------------------------------------------------
  // 2. Application State Management
  // --------------------------------------------------------------------------
  const state = {
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    cart: [], // Items in shopping bag: { id, name, price, image, quantity }
    wishlist: new Set(), // Set of saved product IDs
    freeShippingThreshold: 250 // $250 complimentary shipping benchmark
  };

  // --------------------------------------------------------------------------
  // 3. DOM Elements Selection
  // --------------------------------------------------------------------------
  const elements = {
    // Header & Navigation
    header: document.getElementById('header'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    primaryNav: document.getElementById('primary-nav'),
    mobileBackdrop: document.getElementById('mobile-drawer-backdrop'),
    headerSearchInput: document.getElementById('header-search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    wishlistToggleBtn: document.getElementById('wishlist-toggle-btn'),
    wishlistCountBadge: document.getElementById('wishlist-count'),
    bagToggleBtn: document.getElementById('bag-toggle-btn'),
    bagCountBadge: document.getElementById('bag-count'),
    
    // Catalog controls & Grid
    catalogSection: document.getElementById('catalog'),
    catalogCounter: document.getElementById('catalog-counter'),
    filterChips: document.querySelectorAll('.filter-chip'),
    catalogSearchInput: document.getElementById('catalog-search-input'),
    catalogSortSelect: document.getElementById('catalog-sort'),
    productGrid: document.getElementById('product-grid'),
    productCards: document.querySelectorAll('.product-card'),
    emptyState: document.getElementById('empty-state'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),

    // Category navigation cards & links
    categoryCards: document.querySelectorAll('.category-card, .category-card-btn'),
    navLinks: document.querySelectorAll('.nav-link, .floating-link, .footer-links a'),

    // Shopping Bag Drawer
    bagDrawer: document.getElementById('bag-drawer'),
    bagBackdrop: document.getElementById('bag-backdrop'),
    bagDrawerClose: document.getElementById('bag-drawer-close'),
    bagDrawerItemsCount: document.getElementById('bag-drawer-items-count'),
    shippingProgressText: document.getElementById('shipping-progress-text'),
    shippingProgressBar: document.getElementById('shipping-progress-bar'),
    bagEmptyState: document.getElementById('bag-empty-state'),
    bagItemsList: document.getElementById('bag-items-list'),
    bagDrawerFooter: document.getElementById('bag-drawer-footer'),
    bagSubtotal: document.getElementById('bag-subtotal'),
    bagShipping: document.getElementById('bag-shipping'),
    bagTotal: document.getElementById('bag-total'),
    checkoutDemoBtn: document.getElementById('checkout-demo-btn'),
    clearBagBtn: document.getElementById('clear-bag-btn'),
    bagStartShoppingBtn: document.getElementById('bag-start-shopping-btn'),

    // Toast Notification
    toast: document.getElementById('toast-notification'),
    toastMessage: document.getElementById('toast-message'),

    // Newsletter Form
    newsletterForm: document.getElementById('newsletter-form'),
    newsletterEmail: document.getElementById('newsletter-email'),
    newsletterFeedback: document.getElementById('newsletter-feedback')
  };

  // --------------------------------------------------------------------------
  // 4. Utility Functions
  // --------------------------------------------------------------------------
  
  // Format number to currency ($340.00)
  function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  // Toast Notification Message
  let toastTimer = null;
  function showToast(message) {
    if (!elements.toast || !elements.toastMessage) return;

    elements.toastMessage.textContent = message;
    elements.toast.classList.add('show');
    elements.toast.setAttribute('aria-hidden', 'false');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      elements.toast.classList.remove('show');
      elements.toast.setAttribute('aria-hidden', 'true');
    }, 3200);
  }

  // Animate counter badges on update
  function triggerBadgePop(badge) {
    if (!badge) return;
    badge.classList.remove('bump');
    void badge.offsetWidth; // Force reflow
    badge.classList.add('bump');
  }

  // --------------------------------------------------------------------------
  // 5. Product Filtering, Searching & Sorting Logic
  // --------------------------------------------------------------------------

  function updateCatalog() {
    let visibleCount = 0;
    const cardsArray = Array.from(elements.productCards);

    // Filter each product card
    cardsArray.forEach(card => {
      const cardCategory = card.dataset.category || '';
      const cardTags = (card.dataset.tags || '').split(' ');
      const cardName = (card.dataset.name || '').toLowerCase();
      const cardCategoryText = (card.querySelector('.product-category')?.textContent || '').toLowerCase();
      
      // Category Match check
      let categoryMatch = false;
      if (state.activeCategory === 'all') {
        categoryMatch = true;
      } else if (state.activeCategory === 'new-arrivals') {
        categoryMatch = cardTags.includes('new-arrivals');
      } else if (state.activeCategory === 'sale') {
        categoryMatch = cardTags.includes('sale') || Number(card.dataset.discount) > 0;
      } else {
        categoryMatch = (cardCategory === state.activeCategory);
      }

      // Search Query Match check
      let searchMatch = true;
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase().trim();
        searchMatch = cardName.includes(query) || 
                      cardCategoryText.includes(query) || 
                      cardTags.some(tag => tag.includes(query));
      }

      // Update card display
      const isVisible = categoryMatch && searchMatch;
      if (isVisible) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Sort visible cards
    sortProductCards(cardsArray);

    // Update pieces count text
    if (elements.catalogCounter) {
      elements.catalogCounter.innerHTML = `Displaying <strong>${visibleCount}</strong> of <strong>${products.length}</strong> pieces`;
    }

    // Handle Empty Results State
    if (elements.emptyState) {
      if (visibleCount === 0) {
        elements.emptyState.style.display = 'block';
        if (elements.productGrid) elements.productGrid.style.display = 'none';
      } else {
        elements.emptyState.style.display = 'none';
        if (elements.productGrid) elements.productGrid.style.display = 'grid';
      }
    }
  }

  function sortProductCards(cardsArray) {
    if (!elements.productGrid) return;

    cardsArray.sort((a, b) => {
      const idA = Number(a.dataset.id);
      const idB = Number(b.dataset.id);
      const priceA = Number(a.dataset.price);
      const priceB = Number(b.dataset.price);
      const discountA = Number(a.dataset.discount || 0);
      const discountB = Number(b.dataset.discount || 0);
      const nameA = (a.dataset.name || '').toLowerCase();
      const nameB = (b.dataset.name || '').toLowerCase();

      switch (state.sortBy) {
        case 'price-asc':
          return priceA - priceB;
        case 'price-desc':
          return priceB - priceA;
        case 'discount':
          return discountB - discountA;
        case 'name':
          return nameA.localeCompare(nameB);
        case 'featured':
        default:
          return idA - idB;
      }
    });

    cardsArray.forEach(card => elements.productGrid.appendChild(card));
  }

  function setActiveFilter(category) {
    state.activeCategory = category;

    elements.filterChips.forEach(chip => {
      const chipCategory = chip.dataset.filter;
      const isActive = (chipCategory === category);
      chip.classList.toggle('active', isActive);
      chip.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    updateCatalog();
  }

  // Filter chips click event
  elements.filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const category = chip.dataset.filter || 'all';
      setActiveFilter(category);
    });
  });

  // Category navigation cards & menu links
  document.querySelectorAll('[data-filter]').forEach(clickable => {
    if (clickable.classList.contains('filter-chip')) return;

    clickable.addEventListener('click', () => {
      const category = clickable.dataset.filter;
      if (category) {
        setActiveFilter(category);
        closeMobileMenu();
        const catalogEl = document.getElementById('catalog');
        if (catalogEl) {
          catalogEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Synchronized Search Inputs (Header and Catalog)
  function handleSearchInput(value) {
    state.searchQuery = value;

    if (elements.headerSearchInput && elements.headerSearchInput.value !== value) {
      elements.headerSearchInput.value = value;
    }
    if (elements.catalogSearchInput && elements.catalogSearchInput.value !== value) {
      elements.catalogSearchInput.value = value;
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.style.display = value.trim() ? 'block' : 'none';
    }

    updateCatalog();
  }

  if (elements.headerSearchInput) {
    elements.headerSearchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
  }

  if (elements.catalogSearchInput) {
    elements.catalogSearchInput.addEventListener('input', (e) => handleSearchInput(e.target.value));
  }

  if (elements.clearSearchBtn) {
    elements.clearSearchBtn.addEventListener('click', () => {
      handleSearchInput('');
      if (elements.headerSearchInput) elements.headerSearchInput.focus();
    });
  }

  if (elements.catalogSortSelect) {
    elements.catalogSortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      updateCatalog();
    });
  }

  if (elements.resetFiltersBtn) {
    elements.resetFiltersBtn.addEventListener('click', () => {
      state.searchQuery = '';
      if (elements.headerSearchInput) elements.headerSearchInput.value = '';
      if (elements.catalogSearchInput) elements.catalogSearchInput.value = '';
      if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = 'none';
      if (elements.catalogSortSelect) elements.catalogSortSelect.value = 'featured';
      state.sortBy = 'featured';
      setActiveFilter('all');
    });
  }

  // --------------------------------------------------------------------------
  // 6. Shopping Bag Drawer & Cart State
  // --------------------------------------------------------------------------

  function addToBag(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = state.cart.find(item => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        fallback: product.fallback,
        quantity: 1
      });
    }

    renderBag();
    triggerBadgePop(elements.bagCountBadge);
    showToast(`Added “${product.name}” to your bag`);
    openBagDrawer();
  }

  function updateBagItemQty(productId, delta) {
    const itemIndex = state.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    state.cart[itemIndex].quantity += delta;

    if (state.cart[itemIndex].quantity <= 0) {
      const removedName = state.cart[itemIndex].name;
      state.cart.splice(itemIndex, 1);
      showToast(`Removed “${removedName}” from bag`);
    }

    renderBag();
  }

  function removeBagItem(productId) {
    const itemIndex = state.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    const removedName = state.cart[itemIndex].name;
    state.cart.splice(itemIndex, 1);
    renderBag();
    showToast(`Removed “${removedName}” from bag`);
  }

  function clearBag() {
    if (state.cart.length === 0) return;
    state.cart = [];
    renderBag();
    showToast('Shopping bag cleared');
  }

  function renderBag() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Header counter badge
    if (elements.bagCountBadge) {
      elements.bagCountBadge.textContent = totalItems;
      elements.bagToggleBtn.setAttribute('aria-label', `Shopping bag (${totalItems} items)`);
    }

    // Drawer header count
    if (elements.bagDrawerItemsCount) {
      elements.bagDrawerItemsCount.textContent = `(${totalItems} ${totalItems === 1 ? 'item' : 'items'})`;
    }

    // Empty Bag State
    if (totalItems === 0) {
      if (elements.bagEmptyState) elements.bagEmptyState.style.display = 'flex';
      if (elements.bagItemsList) elements.bagItemsList.innerHTML = '';
      if (elements.bagDrawerFooter) elements.bagDrawerFooter.style.display = 'none';
      if (elements.shippingProgressBar) elements.shippingProgressBar.style.width = '0%';
      if (elements.shippingProgressText) {
        elements.shippingProgressText.innerHTML = `Add <strong>$${state.freeShippingThreshold.toFixed(2)}</strong> for complimentary worldwide courier`;
      }
      return;
    }

    // Populated Bag State
    if (elements.bagEmptyState) elements.bagEmptyState.style.display = 'none';
    if (elements.bagDrawerFooter) elements.bagDrawerFooter.style.display = 'flex';

    if (elements.bagItemsList) {
      elements.bagItemsList.innerHTML = state.cart.map(item => `
        <li class="bag-item" data-id="${item.id}">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="bag-item-img" 
            onerror="this.onerror=null; this.src='${item.fallback}';"
          >
          <div class="bag-item-details">
            <h4 class="bag-item-title">${item.name}</h4>
            <span class="bag-item-price">${formatCurrency(item.price)}</span>
            <div class="bag-item-actions">
              <div class="qty-control">
                <button type="button" class="qty-btn qty-decrease" data-id="${item.id}" aria-label="Decrease quantity of ${item.name}">&minus;</button>
                <span class="qty-val">${item.quantity}</span>
                <button type="button" class="qty-btn qty-increase" data-id="${item.id}" aria-label="Increase quantity of ${item.name}">&#43;</button>
              </div>
              <button type="button" class="bag-item-remove" data-id="${item.id}" aria-label="Remove ${item.name} from bag">Remove</button>
            </div>
          </div>
          <div class="bag-item-total">
            ${formatCurrency(item.price * item.quantity)}
          </div>
        </li>
      `).join('');
    }

    if (elements.bagSubtotal) elements.bagSubtotal.textContent = formatCurrency(subtotal);
    if (elements.bagTotal) elements.bagTotal.textContent = formatCurrency(subtotal);

    // Free shipping tracker calculation ($250 threshold)
    if (elements.shippingProgressBar && elements.shippingProgressText) {
      const percentage = Math.min(100, (subtotal / state.freeShippingThreshold) * 100);
      elements.shippingProgressBar.style.width = `${percentage}%`;

      if (subtotal >= state.freeShippingThreshold) {
        elements.shippingProgressText.innerHTML = `<strong>Congratulations!</strong> You have unlocked complimentary express courier.`;
        if (elements.bagShipping) elements.bagShipping.textContent = 'Complimentary';
      } else {
        const remaining = state.freeShippingThreshold - subtotal;
        elements.shippingProgressText.innerHTML = `Add <strong>${formatCurrency(remaining)}</strong> more for complimentary worldwide courier`;
        if (elements.bagShipping) elements.bagShipping.textContent = 'Calculated at checkout';
      }
    }
  }

  function openBagDrawer() {
    if (!elements.bagDrawer || !elements.bagBackdrop) return;
    elements.bagDrawer.classList.add('open');
    elements.bagBackdrop.classList.add('open');
    elements.bagDrawer.setAttribute('aria-hidden', 'false');
    elements.bagBackdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeBagDrawer() {
    if (!elements.bagDrawer || !elements.bagBackdrop) return;
    elements.bagDrawer.classList.remove('open');
    elements.bagBackdrop.classList.remove('open');
    elements.bagDrawer.setAttribute('aria-hidden', 'true');
    elements.bagBackdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (elements.bagToggleBtn) elements.bagToggleBtn.addEventListener('click', openBagDrawer);
  if (elements.bagDrawerClose) elements.bagDrawerClose.addEventListener('click', closeBagDrawer);
  if (elements.bagBackdrop) elements.bagBackdrop.addEventListener('click', closeBagDrawer);

  if (elements.bagStartShoppingBtn) {
    elements.bagStartShoppingBtn.addEventListener('click', () => {
      closeBagDrawer();
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (elements.clearBagBtn) elements.clearBagBtn.addEventListener('click', clearBag);

  if (elements.bagItemsList) {
    elements.bagItemsList.addEventListener('click', (e) => {
      const target = e.target;
      const id = Number(target.dataset.id);
      if (!id) return;

      if (target.classList.contains('qty-increase')) updateBagItemQty(id, 1);
      else if (target.classList.contains('qty-decrease')) updateBagItemQty(id, -1);
      else if (target.classList.contains('bag-item-remove')) removeBagItem(id);
    });
  }

  if (elements.checkoutDemoBtn) {
    elements.checkoutDemoBtn.addEventListener('click', () => {
      showToast('Frontend Demo: No checkout or real orders are processed.');
    });
  }

  // --------------------------------------------------------------------------
  // 7. Product Card Quick Add & Wishlist Handling
  // --------------------------------------------------------------------------
  if (elements.productGrid) {
    elements.productGrid.addEventListener('click', (e) => {
      const addBtn = e.target.closest('.quick-add-btn');
      if (addBtn) {
        e.preventDefault();
        const productId = Number(addBtn.dataset.id);
        if (productId) addToBag(productId);
        return;
      }

      const wishlistBtn = e.target.closest('.wishlist-btn');
      if (wishlistBtn) {
        e.preventDefault();
        const productId = Number(wishlistBtn.dataset.id);
        if (productId) toggleWishlist(productId, wishlistBtn);
        return;
      }
    });
  }

  function toggleWishlist(productId, btnElement) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    if (state.wishlist.has(productId)) {
      state.wishlist.delete(productId);
      btnElement.classList.remove('active');
      btnElement.setAttribute('aria-label', `Save ${product.name} to wishlist`);
      showToast(`Removed “${product.name}” from wishlist`);
    } else {
      state.wishlist.add(productId);
      btnElement.classList.add('active');
      btnElement.setAttribute('aria-label', `Remove ${product.name} from wishlist`);
      showToast(`Saved “${product.name}” to your wishlist`);
    }

    const wishlistCount = state.wishlist.size;
    if (elements.wishlistCountBadge) {
      elements.wishlistCountBadge.textContent = wishlistCount;
      triggerBadgePop(elements.wishlistCountBadge);
    }
    if (elements.wishlistToggleBtn) {
      elements.wishlistToggleBtn.setAttribute('aria-label', `Wishlist items (${wishlistCount} saved)`);
    }
  }

  if (elements.wishlistToggleBtn) {
    elements.wishlistToggleBtn.addEventListener('click', () => {
      const count = state.wishlist.size;
      if (count === 0) {
        showToast('Your wishlist is empty. Tap the heart icon on any piece to save it.');
      } else {
        showToast(`You have ${count} ${count === 1 ? 'piece' : 'pieces'} saved in your wishlist.`);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 8. Mobile Navigation Hamburger Menu
  // --------------------------------------------------------------------------
  function toggleMobileMenu() {
    const isOpen = elements.primaryNav.classList.contains('open');
    if (isOpen) closeMobileMenu();
    else openMobileMenu();
  }

  function openMobileMenu() {
    if (!elements.primaryNav || !elements.mobileMenuBtn) return;
    elements.primaryNav.classList.add('open');
    elements.mobileMenuBtn.classList.add('open');
    elements.mobileMenuBtn.setAttribute('aria-expanded', 'true');
    if (elements.mobileBackdrop) elements.mobileBackdrop.classList.add('open');
  }

  function closeMobileMenu() {
    if (!elements.primaryNav || !elements.mobileMenuBtn) return;
    elements.primaryNav.classList.remove('open');
    elements.mobileMenuBtn.classList.remove('open');
    elements.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    if (elements.mobileBackdrop) elements.mobileBackdrop.classList.remove('open');
  }

  if (elements.mobileMenuBtn) elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
  if (elements.mobileBackdrop) elements.mobileBackdrop.addEventListener('click', closeMobileMenu);

  elements.navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBagDrawer();
      closeMobileMenu();
    }
  });

  // --------------------------------------------------------------------------
  // 9. Newsletter Form Submission Handler
  // --------------------------------------------------------------------------
  if (elements.newsletterForm) {
    elements.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = elements.newsletterEmail ? elements.newsletterEmail.value.trim() : '';

      if (email && email.includes('@') && email.includes('.')) {
        if (elements.newsletterFeedback) {
          elements.newsletterFeedback.textContent = 'Thank you for subscribing to The Atelier Dispatch.';
          elements.newsletterFeedback.className = 'newsletter-feedback success';
        }
        showToast('Subscribed to The Atelier Dispatch!');
        elements.newsletterForm.reset();

        setTimeout(() => {
          if (elements.newsletterFeedback) {
            elements.newsletterFeedback.textContent = '';
            elements.newsletterFeedback.className = 'newsletter-feedback';
          }
        }, 5000);
      } else {
        if (elements.newsletterFeedback) {
          elements.newsletterFeedback.textContent = 'Please enter a valid email address.';
          elements.newsletterFeedback.className = 'newsletter-feedback error';
        }
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. Sticky Header Scroll Effect
  // --------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (!elements.header) return;
    if (window.scrollY > 20) elements.header.classList.add('scrolled');
    else elements.header.classList.remove('scrolled');
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 11. Global Image Fallback Handler
  // --------------------------------------------------------------------------
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function onImageError() {
      this.removeEventListener('error', onImageError);
      const card = this.closest('.product-card');
      if (card) {
        const id = Number(card.dataset.id);
        const product = products.find(p => p.id === id);
        if (product) {
          this.src = this.classList.contains('product-img-alt') ? product.fallbackAlt : product.fallback;
          return;
        }
      }
      if (this.classList.contains('hero-img')) this.src = 'assets/images/hero-editorial.svg';
      else if (this.classList.contains('story-img')) this.src = 'assets/images/story-craft.svg';
    });
  });

  // --------------------------------------------------------------------------
  // 12. Initialize App
  // --------------------------------------------------------------------------
  updateCatalog();
  renderBag();
  console.log('Atelier One store loaded successfully. 14 products initialized.');
});