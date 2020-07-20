/*
    Dynamically update height of the delete button so that it matches the height
    of its containing list item.
*/
function fixGoalHeights() {
    document.querySelectorAll('li').forEach((li) => {
        deleteIcon = li.getElementsByClassName('delete')[0];
        goal = li.getElementsByClassName('goal')[0];
        height = `${goal.getBoundingClientRect().height}px`;
        deleteIcon.style.height = height;
        deleteIcon.style.lineHeight = height;
    });
}

// Fix delete button height on hover
document.querySelectorAll('.goal').forEach((goal) => {
    goal.addEventListener('mouseenter', () => setTimeout(fixGoalHeights, 450));
    goal.addEventListener('mouseout', () => setTimeout(fixGoalHeights, 450));
});

// Toggle the visibility of the add goal input box
document.querySelector('h1 i').onclick = () => {
    document.querySelector('input').classList.toggle('hidden-input');
    document.querySelector('form').classList.toggle('hidden-input');
};

// Submit the delete form
document.querySelectorAll('.delete').forEach((e) => {
    e.onclick = () => {
        form = document.querySelector(`form[action='/goals/${e.id}/delete']`);
        if (confirm('Are you sure you want to delete this goal?'))
            form.submit();
    };
});

window.onload = fixGoalHeights;
window.onresize = fixGoalHeights;