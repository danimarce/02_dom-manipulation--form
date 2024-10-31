const createNote = (event) => {
    const titleValue = event.target.title.value;
    const contentValue = event.target.content.value;
    let priorityValue = event.target.priority.value;

    if (priorityValue == 0) {
        priorityValue = "No priority";
    }

    const $unorderedList = window.document.querySelector('.section__list');
    
    const $listItem = window.document.createElement('li');
    $listItem.classList.add('list__item');

    const $headingItem = window.document.createElement('h3');
    $headingItem.classList.add('item__title');
    const $headingTitle = window.document.createTextNode(titleValue);
    $headingItem.appendChild($headingTitle);

    const $contentParagraphItem = window.document.createElement('p');
    $contentParagraphItem.classList.add('item__content');
    const $paragraphContent = window.document.createTextNode(contentValue);
    $contentParagraphItem.appendChild($paragraphContent);

    const $priorityParagraphItem = window.document.createElement('p');
    $priorityParagraphItem.classList.add('item__priority');
    const $paragraphPriorityItem = window.document.createTextNode(priorityValue);
    $priorityParagraphItem.appendChild($paragraphPriorityItem);

    $listItem.appendChild($headingItem);
    $listItem.appendChild($contentParagraphItem);
    $listItem.appendChild($priorityParagraphItem);  

    $unorderedList.appendChild($listItem);
}

const $form = window.document.querySelector('.section__form');

$form.addEventListener('submit', (event) => {
    event.preventDefault();

    createNote(event);
    $form.reset();
})
