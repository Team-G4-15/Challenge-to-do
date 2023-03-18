window.addEventListener('load', (e) => {

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task)
            return;

        input.value = "";
        
        const task_element = document.createElement('div');
        task_element.classList.add('task');

        const task_content = document.createElement('div');
        task_content.classList.add('content');

        const task_input = document.createElement('input');
        task_input.classList.add('task_text');
        task_input.type='text';
        task_input.value=task;
        task_input.setAttribute('readonly', 'readonly');

        task_content.appendChild(task_input);

        task_element.appendChild(task_content);

        const task_actions = document.createElement('div');
        task_actions.classList.add('actions');

        const edit_btn = document.createElement('button');
        edit_btn.classList.add('edit');
        edit_btn.innerText = "Edit";
        edit_btn.addEventListener('click', (e) =>{
            if(edit_btn.innerText.toLowerCase() == "edit"){
                task_input.removeAttribute("readonly");
                task_input.focus();
                edit_btn.innerText = "Save";
            }else if(task_input.value){
                    task_input.setAttribute('readonly', 'readonly');
                    edit_btn.innerText = "Edit";
            }
        });

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete');
        delete_btn.innerText = "Delete";
        delete_btn.addEventListener('click', (e) => {
            list_el.removeChild(task_element);
        });

        task_actions.appendChild(edit_btn);
        task_actions.appendChild(delete_btn);

        task_element.appendChild(task_actions);

        list_el.appendChild(task_element);

    });
});