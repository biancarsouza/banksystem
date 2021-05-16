var clientes = [
    [nome = "Bruno",
    código = "123",
    senha = "123",
    saldo = 100],
    [nome = "Joaozinho",
    código = "456",
    senha = "456",
    saldo = 10],
]


var codigo = window.prompt("Digite o seu código.")
var senha = window.prompt("Digite a sua senha.")

function procura_cliente(cliente) {
    return cliente[1] == codigo && cliente[2] == senha 
}

var cliente_localizado = (clientes.find(procura_cliente))

if (cliente_localizado == null) {
    alert("A conta não foi localizada.")
}

else {

    var saldo = cliente_localizado[3]

    if(saldo == 0){
        alert("Você não tem saldo suficiente para realizar essa operação.");
    }

    else {

        var continuar = true;

        while(continuar) {

            var operacao = Number(window.prompt("Qual a operação que você deseja realizar? 1 - Saque   2 - Depósito   3 - Transferência"));

            switch(operacao){

                case(1):
                    
                    var saque = Number(window.prompt("Qual o valor do saque?"))

                    if(saque<=saldo && saque>0) {

                        saldo = saldo - saque;
                        alert(`O saque foi realizado com sucesso. Seu novo saldo é de R$${saldo}.`)

                    }

                    else{

                        alert("Seu saldo não é suficiente para realizar a operação.")

                    }

                break
                
                case(2):

                    var dep = Number(window.prompt("Qual o valor a ser depositado?"));
                    var contaareceber = (window.prompt("Qual é a conta de destino?"));

                    if(dep<=saldo && dep>0){

                        function procura_conta(cliente){
                            return cliente[1] == contaareceber;
                        }

                        var contalocalizada = (clientes.find(procura_conta));

                        if (contalocalizada == null) {

                            alert("O cliente não foi localizado.");

                        }

                        else {

                            saldo = saldo - dep;
                            alert(`O depósito foi realizado com sucesso. Seu novo saldo é de R$${saldo}.`)

                        }

                    }

                    else {

                        alert("Seu saldo não é suficiente para realizar o depósito.");

                    }

                break

                case(3):

                    var codigoT = window.prompt("Digite o código da conta a receber a transferência.");
                    var senhaT = window.prompt("Digite a senha da conta a receber a transferência.")

                    function clienteTRF (clienteT) {

                        return clienteT[1] == codigoT && clienteT[2] == senhaT

                    }

                    var contaTRF = (clientes.find(clienteTRF));

                    if(contaTRF == cliente_localizado){

                        alert("Não é possível realizar a transferência.")

                    }

                    else if(cliente_localizado[3] == 0) {

                        alert("Não é possível realizar a transferência.")

                    }

                    else if(contaTRF[1] == codigoT && contaTRF[2] == senhaT) {

                        var saldoTRF = contaTRF[3];

                        var TRF = Number(window.prompt("Qual o valor da transferência a ser realizada?"));

                        saldoTRF = saldoTRF + TRF;
                        saldo = saldo - TRF;

                        alert(`Transferência realizada com sucesso. O novo saldo da conta que recebeu a transferência é de R$${saldoTRF}. O novo saldo da sua conta é de R$${saldo}.`);

                    }

                break

            }

            while(true){

                let escolha = window.prompt("Deseja fazer mais alguma operação? Responda com Sim ou  Não.");

                if (escolha == "Sim"){
                    break
                }

                else if(escolha == "Não"){
                    continuar = false
                    break
                }

                else {
                    alert("Apenas com Sim ou Não.")
                }

            }
        }
    }
} 