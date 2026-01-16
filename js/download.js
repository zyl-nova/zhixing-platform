
  
  // 填充表格数据（这个好像没用）
  function populateTable(data) {
    const tbody = document.querySelector("#report-table tbody");
    tbody.innerHTML = ""; // 清空现有数据
  
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.time}</td>
        <td>${item.format}</td>
        <td>${item.size}</td>
        <td><button onclick="downloadReport('${item.name}')">下载</button></td>
      `;
      tbody.appendChild(row);
    });
  }
  
  // 下载报表
  function downloadReport(reportName) {
    alert(`下载报表：${reportName}`);
  }
  
  // 搜索功能
  document.getElementById("search-btn").addEventListener("click", () => {
    const searchText = document.getElementById("search-box").value.toLowerCase();
    const filteredData = reportData.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );
    populateTable(filteredData);
  });
  
  // 分页功能
  let currentPage = 1;
  const itemsPerPage = 10;
  
  function updatePagination() {
    document.getElementById("current-page").textContent = currentPage;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = reportData.slice(startIndex, endIndex);
    populateTable(paginatedData);
  }
  
  document.getElementById("prev-page").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });
  
  document.getElementById("next-page").addEventListener("click", () => {
    if (currentPage < Math.ceil(reportData.length / itemsPerPage)) {
      currentPage++;
      updatePagination();
    }
  });
  
  
  // 初始化表格数据
  populateTable(reportData);
  updatePagination();