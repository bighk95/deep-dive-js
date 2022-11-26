
  const $form = document.querySelector('.todo-footer');
  const $todoList = document.querySelector('.todo-list');

$form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(e.target.description.value === "") {
      window.alert('내용을 입력해주세요.');
      return;
    }
    const $itemContainer = document.createElement('div');

    const todoItem = `
      <li class="todo-item">
      
        <div class="todo-item-description">
          <input type="checkbox"/>
          <span>${e.target.description.value}</span>
        </div>
        <div class="todo-item-success-date"></div>
      </li>
`

      $itemContainer.innerHTML = todoItem;
      $todoList.append($itemContainer);
      
      const $checkbox = $itemContainer.querySelector('input[type="checkbox"]');
      console.log($checkbox)
      const $span = $itemContainer.querySelector('span');
      const $itemSuccessDate = $itemContainer.querySelector('.todo-item-success-date');
      $span.innerHTML = e.target.desitemContainercription.value;

      $checkbox.addEventListener('change', (checkboxEvent) => {
        if(checkboxEvent.target.checked) {
          const date = new Date();
          const today = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
          $itemSuccessDate.innerHTML = today;
          $span.classList.add('success-text');
        } else {
          $span.classList.remove('success-text');
          $itemSuccessDate.innerHTML = "";

        }
      });

      $span.addEventListener('click', () => {
        const yes = window.confirm('삭제하시겠습니까?');
        console.log(yes);
        if(yes){
          $todoList.removeChild($itemContainer);
        }

      });

      e.target.description.value = "";
});


