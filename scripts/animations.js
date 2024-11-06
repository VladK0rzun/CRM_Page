document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.sidebar__item, .table-section, .pagination__link');
  
    items.forEach(item => {
      item.style.opacity = 0;
      item.style.transition = 'opacity 0.5s ease-in-out';
  
      setTimeout(() => {
        item.style.opacity = 1;
      }, 200);
    });
  });