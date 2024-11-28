const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const modalInfo = document.getElementById("modal-info");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal(card) {
    const cardImg = card.querySelector('img');
    const visibleInfo = card.querySelector('.bee-info').innerHTML;
    const hiddenInfo = card.querySelector('.hidden-info').innerHTML;

    modalImg.src = cardImg.src;
    modalImg.alt = cardImg.alt;

    modalInfo.innerHTML = `
        ${visibleInfo}
        <div class="modal-metadata">
            ${hiddenInfo}
        </div>
    `;

    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; 
}

closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = '';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = ''; 
    }
}

function toggleFilter() {
    document.getElementById("filterDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.filter-icon') && !event.target.matches('.fa-filter')) {
        var dropdowns = document.getElementsByClassName("filter-dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


document.addEventListener('click', function(event) {
    if (event.target.closest('.like-button, .dislike-button, .like-comment-button, .dislike-comment-button')) {
        const button = event.target.closest('.like-button, .dislike-button, .like-comment-button, .dislike-comment-button');
        button.classList.toggle('active');
        button.classList.add('animate');
        setTimeout(() => {
            button.classList.remove('animate');
        }, 500);

        if (button.matches('.like-comment-button')) {
            const likeCount = button.querySelector('.like-count');
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else if (button.matches('.dislike-comment-button')) {
            const dislikeCount = button.querySelector('.dislike-count');
            dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
        }
    }
});
