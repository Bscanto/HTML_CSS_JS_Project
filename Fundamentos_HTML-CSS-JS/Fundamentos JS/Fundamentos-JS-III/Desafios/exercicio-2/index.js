const devs = [];

function addTech() {
    const techList = document.getElementById("techList");
    const li = document.createElement("li");


    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Tecnologia";
    input.required = true;


    const expGroup = document.createElement("div");
    ["0-2 anos", "3-4 anos", "5+ anos"].forEach(exp => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `exp-${techList.children.length}`; 
        radio.value = exp;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(exp));
        expGroup.appendChild(label);
    });


    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remover";
    removeBtn.type = "button";
    removeBtn.className = "btn-remove"
    removeBtn.onclick = () => techList.removeChild(li);

    li.appendChild(input);
    li.appendChild(expGroup);
    li.appendChild(removeBtn);
    techList.appendChild(li);
}


document.getElementById("devForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const devName = document.getElementById("devName").value;
    const techItems = document.querySelectorAll("#techList li");

    const dev = { name: devName, technologies: [] };

    techItems.forEach(item => {
        const techName = item.querySelector("input[type='text']").value;
        const exp = item.querySelector("input[type='radio']:checked");

        if (techName && exp) {
            dev.technologies.push({ name: techName, experience: exp.value });
        }
    });

    devs.push(dev);
    updateDevList();
    this.reset();
    document.getElementById("techList").innerHTML = "";
});

function updateDevList() {
    const devList = document.getElementById("devList");
    devList.innerHTML = "";
    devs.forEach(dev => {
        const li = document.createElement("li");
        li.innerText = `${dev.name}: ${dev.technologies.map(t => `${t.name} (${t.experience})`).join(", ")}`;
        devList.appendChild(li);
    });
}