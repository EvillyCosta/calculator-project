# calculator-project
my first calculator (building)

anotações 
**Grid 

- melhor que flexbox para criar layouts que tenham muitas divs
- pois flex box é melhor para alinhamento de uma dimensao
- grid vc pode alinhar em varias dimensoes
- da pra misturar grid +flexbox, da pra ter um dentro do outro
- demo grid vs flexbox 
- https://appbrewery.github.io/grid-vs-flexbox/

- tem um container tambem e items 
- grid-template-columns: 1fr 2fr (fractional ratio)
- 1:2 basicamente (significa que no 2 a coluna tera o dobro da primeira)
- grid-template-rows: 1fr 1fr (linhas de mesmo tamanho)
- gap padrao para distanciamento

**Grid Sizing

- pode dar valores fixos para as columns e rows, por ex: 100px 200px 
- porem fixar nao é responsivo 
- pq n tem como mudar altura e largura dps, ficara fixo
- vc pode usar 1em e 1rem tbm
- é possivel juntar rows e columns numa linha só
- ex: grid-template: 100px 200px / 400px 800px
- usar *auto* dps de 100px em columns por exemplo, vai fazer com oq ele tente ocupar 100% do que sobra da tela dps de providenciar os 100px
- mas em rows ele vai fit content usando auto, nao vai ocupar a tela toda, só vai fazer o conteudo de baixo caber
- demo: https://appbrewery.github.io/grid-sizing/

- em columns vc tbm pode limitar minimo e maximo da coluna, por ex:
- grid-temaplate-columns: 200px minmax(400px,800px)
- isso para caso oq vc tenha na segunda coluna n possa encolher tanto ou esticar tanto (img por ex)

- para n precisar repetir muitas vezes a coluna ou linha, pode-se usar repeat(2, 200px) onde 2 sera a quantidade de vzs que vai se repetir o valor 200px

- colocar grid-auto-rows ajuda a definir um tamanho padrao para linhas que n estejam definidas em columns e rows

**Grid Item Placement

-  lines
- tracks
- cells
- container
- items

- usar grid-column: span 2 - vai fazer com q o item ocupe duas colunas de onde esta
- abaixo de grid-column, há grid-column-start e grid-column-end que te permite escolher de qual linha vertical começa e termina esse item

- order é importante para vc conseguir movimentar o item para outra posição que tenha espaço pra vc amplia-lo
- tbm é possivel movimentar passando cordenadas por ex:
- grid-column-start: 1;
- grid-column-end: 3;
- grid-row-start: 2;
- grid-row-end: 3;
- e de modo simplificado usar:
- grid-area: 2 / 1 / 3 / 3; (row, column, row, column)
- é possivel sobrepor os itens entre si usando as coordenadas
