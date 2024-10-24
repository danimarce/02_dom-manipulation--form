const $form = window.document.querySelector('.section__form');

$form.addEventListener('submit', (event) => {
    event.preventDefault();

    const titleValue = event.target.title.value;
    const contentValue = event.target.content.value;
    let priorityValue = event.target.priority.value;

    if (priorityValue == 0) {
        priorityValue = "No priority";
    }

    console.log({ title: titleValue, content: contentValue, priority: priorityValue });

    const $unorderedList = window.document.querySelector('.section__list');
    
    const $listItem = window.document.createElement('li');
    $listItem.classList.add('list__item');

    const $headingItem = window.document.createElement('h3');
    $headingItem.classList.add('item__title');
    const $textTitle = window.document.createTextNode(titleValue);
    $headingItem.appendChild($textTitle);

    const $contentParagraphItem = window.document.createElement('p');
    $contentParagraphItem.classList.add('item__content');
    const $textContent = window.document.createTextNode(contentValue);
    $contentParagraphItem.appendChild($textContent);

    const $priorityParagraphItem = window.document.createElement('p');
    $priorityParagraphItem.classList.add('item__priority');
    const $textPriority = window.document.createTextNode(priorityValue);
    $priorityParagraphItem.appendChild($textPriority);

    $listItem.appendChild($headingItem);
    $listItem.appendChild($contentParagraphItem);
    $listItem.appendChild($priorityParagraphItem);

    $unorderedList.appendChild($listItem);

    const $inputTitle = window.document.querySelector('#title');
    const $inputContent = window.document.querySelector('#content');
    const $inputPriority = window.document.querySelector('#priority');

    $inputTitle.value = "";
    $inputContent.value = "";
    $inputPriority.value = 0;
})
