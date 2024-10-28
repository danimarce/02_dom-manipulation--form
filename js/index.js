    const createNote = (event) => {
        const titleValue = event.target.title.value;
        const contentValue = event.target.content.value;
        let priorityValue = event.target.priority.value;

        if (priorityValue == 0) {
            priorityValue = "No priority";
        }

        const $unorderedList = window.document.querySelector('.section__list');

        const $listItemWrapped = window.document.createElement('div');
        $listItemWrapped.classList.add('listItem__wrapped');
        
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

        $listItemWrapped.appendChild($listItem)    

        $unorderedList.appendChild($listItemWrapped);

        const $inputTitle = window.document.querySelector('#title');
        const $inputContent = window.document.querySelector('#content');
        const $inputPriority = window.document.querySelector('#priority');

        $inputTitle.value = "";
        $inputContent.value = "";
        $inputPriority.value = 0;
    }

    const $form = window.document.querySelector('.section__form');

    $form.addEventListener('submit', (event) => {
        event.preventDefault();

        createNote(event);
    })
