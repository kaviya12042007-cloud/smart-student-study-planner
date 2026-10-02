function addAssignment() {
    let subject = document.getElementById("subject").value;
    let assignment = document.getElementById("assignment").value;
    let deadline = document.getElementById("deadline").value;
    let status = document.getElementById("status").value;

    if (subject === "" || assignment === "") {
        alert("Please fill subject and assignment");
        return;
    }

    let list = document.getElementById("assignmentList");
    let card = document.createElement("div");
    card.style.cssText = "border:1px solid #ccc; padding:15px; margin:10px 0; border-radius:10px; background:white;";
    card.innerHTML = `
        <h3 style="color:#4f46e5; margin:0 0 8px;">${subject}</h3>
        <p><b>Assignment:</b> ${assignment}</p>
        <p><b>Deadline:</b> ${deadline || "Not mentioned"}</p>
        <p><b>Status:</b> ${status}</p>
        <button onclick="this.parentElement.remove()" style="background:red; color:white; border:none; padding:7px 12px; border-radius:5px; cursor:pointer;">Delete</button>
    `;
    list.appendChild(card);
    document.getElementById("subject").value = "";
    document.getElementById("assignment").value = "";
    document.getElementById("deadline").value = "";
}

async function loadAssignments() {
    // CSE Related Tasks
    const cseAssignments = [
        { subject: "Data Structures", task: "Implement Singly Linked List - Insertion & Deletion" },
        { subject: "DBMS", task: "Create Student Database and Write SQL Queries - JOIN, GROUP BY" },
        { subject: "Operating System", task: "Write a program to simulate FCFS Scheduling Algorithm" },
        { subject: "Computer Networks", task: "Configure Static Routing using Cisco Packet Tracer" },
        { subject: "Java Programming", task: "Develop CRUD Application using JDBC Connectivity" }
    ];

    try {
        // API call pannitu, namma CSE data va display panrom
        let response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
        let data = await response.json();
        let list = document.getElementById("assignmentList");

        data.forEach((item, index) => {
            let cse = cseAssignments[index];
            let card = document.createElement("div");
            card.style.cssText = "border:1px solid #ccc; padding:15px; margin:10px 0; border-radius:10px; background:#f8f9ff;";
            card.innerHTML = `
                <h3 style="color:#4f46e5;">${cse.subject} - API Study Task</h3>
                <p><b>Assignment:</b> ${cse.task}</p>
                <p><b>Status:</b> ${item.completed? "Completed ✅" : "Pending ⏳"}</p>
                <button onclick="this.parentElement.remove()" style="background:red; color:white; border:none; padding:7px 12px; border-radius:5px; cursor:pointer;">Delete</button>
            `;
            list.appendChild(card);
        });
    } catch (error) {
        console.log("API Error:", error);
    }
}

loadAssignments();