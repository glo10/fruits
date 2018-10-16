
(function(){
  const baseUrl = 'http://localhost:4000';
  $(document).ready(function(){
    const btn = $('#btn');
    const section = $('section');
    btn.on('click', getFruits);

    function getFruits(){
      fetch(baseUrl + '/fruits')
        .then(res => res.json())
        .then(res => {
          let content = `<table class="table table-striped">
                        <thead>
                          <tr>
                            <th>Français</th>
                            <th>Anglais</th>
                            <th>Italien</th>
                          </tr>
                        </thead>
                        <tbody>`;
          res.forEach(fruit => {
              content += `<tr>
                          <td>${fruit.fr}</td>
                          <td>${fruit.en}</td>
                          <td>${fruit.it}</td>
                      </tr>`;
          })
          content += `   </tbody>
                  </table>`;
          section.html(content);
        })
    }
  });
})()
