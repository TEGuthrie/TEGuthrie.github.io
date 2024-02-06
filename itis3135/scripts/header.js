const template = document.createElement('template');

template.innerHTML = "<header><h1>Thomas Guthrie's Titanic Gopher <span class=\"divider_head\">𒅄</span> ITIS 3135</h1><nav><a href = \"./\">Home</a><span class=\"divider_nav\">𒅄</span><a href = \"introduction.html\">Introduction</a><span class=\"divider_nav\">𒅄</span><a href = \"contract.html\">Contract</a></nav></header>";
document.body.appendChild(template.content);