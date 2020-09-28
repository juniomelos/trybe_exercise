Utilize o modulo fs do Node para ler/escrever arquivos.
Caso algo dê errado em nível de código, deve ser retornado um código 500 (Internal Server Error).
Caso dê tudo certo, a resposta deve voltar com status 200 OK.
Foque nos contratos das APIs (o que elas devem receber e o que devem retornar).
Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman e Insomnia.
Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.
Caso não exista nenhum personagem com o id especificado, deve ser retornado um array vazio.
Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.
O corpo da requisição deve receber os campos id e name;
A operação só deve ser realizada caso o campo id seja único. Caso contrário, deve ser retornado status 400.

Bônus

Caso algum endpoint que não consta nessa lista receber uma requisição, a resposta deve voltar com status 404 Not Found, sem corpo.
Todos os endpoints devem receber um token de autenticação. Esse token deve vir no seguinte modelo: authorization: {token-aqui}. Nesse momento, como você não está salvando os tokens gerados no cadastro em nenhum lugar, só é preciso verificar que as requisições recebem um token no header que possua 16 caracteres.
Caso o token seja inválido ou inexistente, a resposta deve voltar com status 401 Unauthorized e { message: 'Token inválido!' } no corpo.
O caminho do endpoint de autenticação deve ser /signup.
As requisições para esse endpoint deverão utilizar o método POST e devem receber, no corpo da requisição, os campos email, password, firstName e phone.
Caso todos os requisitos acima sejam atendidos, um token aleatório composto por letras e números, com 16 caracteres, deve ser retornado. Para gerar o token você pode utilizar a função randomBytes, do módulo crypto do node.
A resposta da requisição deve ser um objeto com o formato { token: <novo-token-gerado> }.
