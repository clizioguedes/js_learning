const usuarios = [
    {
        nome: 'Clizio Guedes',
        idade: 28,
        sexo: 'M',
        uf: 'RN',
        interesses: [
            'Futebol', 'Musica', 'Games'
        ]
    },
    {
        nome: 'Kersio Guedes',
        idade: 28,
        sexo: 'M',
        uf: 'MG',
        interesses: [
            'Viagem', 'Pesquisa', 'Games'
        ]
    },
    {
        nome: 'Loize Guedes',
        idade: 28,
        sexo: 'F',
        uf: 'SP',
        interesses: [
            'Bike', 'Gastronomia', 'Musica'
        ]
    },
    {
        nome: 'Malu Guedes',
        idade: 28,
        sexo: 'F',
        uf: 'RJ',
        interesses: [
            'Gastronomia', 'Musculação', 'Futebol'
        ]
    },
    {
        nome: 'Maria Guedes',
        idade: 28,
        sexo: 'F',
        uf: 'RS',
        interesses: [
            'Pesquisa', 'Musica', 'Games'
        ]
    },
    {
        nome: 'William Guedes',
        idade: 28,
        sexo: 'M',
        uf: 'CE',
        interesses: [
            'Gastronomia', 'Musculação', 'Fisica'
        ]
    },
]

/**
 * 1 - Trazer quantidade de feminino e masculino
 */

 // Com for

 const proporcaoSexo = {};
 
 for (let i = 0; i < usuarios.length; i++) {
    
    if(!proporcaoSexo[usuarios[i].sexo]) {
        proporcaoSexo[ usuarios[i].sexo ] = 0;
    }    
    proporcaoSexo[ usuarios[i].sexo ] += 1;
 }

 console.log(proporcaoSexo);

 // REDUCE
 const proporcaoSexoComReduce = usuarios.reduce((acc, curr) => {
     return ({
         ...acc,
         [ curr.sexo ]: acc[ curr.sexo ] + 1
     })
 }, { M: 0, F: 0})

 console.log(proporcaoSexoComReduce)


 
/**
 * 2 - Agrupar em um objeto os interesses por estado como chave (pode duplicar)
 */

// com for 
const interessesAgrupadosPorEstado = {};
 
for (let i = 0; i < usuarios.length; i++) {
   
   if(!interessesAgrupadosPorEstado[usuarios[i].uf]) {
    interessesAgrupadosPorEstado[ usuarios[i].uf ] = [];
   }    
   interessesAgrupadosPorEstado[usuarios[i].uf] = interessesAgrupadosPorEstado[usuarios[i].uf ].concat(usuarios[i].interesses)
}

console.log(interessesAgrupadosPorEstado);

 // REDUCE
 const interessesAgrupadosPorEstadoComReduce = usuarios.reduce((acc, usuario) => ({
        ...acc,
        [ usuario.uf ]: [ ...(acc[ usuario.uf ] ? [] : []), ...usuario.interesses  ]
    }), {});

    console.log(interessesAgrupadosPorEstadoComReduce)