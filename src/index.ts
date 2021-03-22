import Template from "./Template";

const temp = new Template(`
<html>
  <head><%= title %></head>
  <body>
    <%% 转义 %%>
    <%# 这里是注释 %>
    <%- before %>
    <% if (show) { %>
      <div>root</div>
    <% } %>
  </body>
</html>
`);

temp.compile();
console.log(
  temp.render({ show: true, title: "hello", before: "<div>xx</div>" })
);
