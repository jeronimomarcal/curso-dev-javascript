    /*
    Jeronimo  Marcal tem 23 anos, pesa 89 kg
    tem 1.83 de altura e seu IMC é de 26.575890590940304
    Jeronimo  nasceu em 1999.

    */
    const nome = 'Jeronimo ';
    const sobrenome = 'Marcal';
    const idade = 23;
    const peso = 89;
    const alturaEmM = 1.83; // Corrigido para metros (ao invés de cm)
    let indiceMassaCorporal; // peso / (altura * altura)
    let anoNascimento;
     
    indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
    anoNascimento = 1999 ;
     
    // template strings
     
    console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
    console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
    console.log(`${nome} nasceu em ${anoNascimento}.`);