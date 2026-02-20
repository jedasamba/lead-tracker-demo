// Dummy leads data
const leads = [
    {name: "Alice Johnson", email: "alice@example.com", interest: "SEO Optimization"},
    {name: "Bob Smith", email: "bob@example.com", interest: "Social Media Ads"},
    {name: "Charlie Lee", email: "charlie@example.com", interest: "Email Marketing"},
    {name: "Dana Kim", email: "dana@example.com", interest: "Content Marketing"},
    {name: "Ethan Brown", email: "ethan@example.com", interest: "PPC Campaigns"}
];

// Populate table
const tableBody = document.querySelector("#leadTable tbody");

leads.forEach(lead => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td>${lead.interest}</td>
    `;
    tableBody.appendChild(row);
});