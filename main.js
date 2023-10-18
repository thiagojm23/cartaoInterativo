new Vue({
  el: "#main",
  data: {
    numeroCartao: "0000 0000 0000 0000",
    portadorCartao: "Nome do portador",
    vencimentoCartaoMes: "Vencimento",
    vencimentoCartaoAno: "",
    cvc: "000",
    confirmarBotao: false,
  },
  methods: {
    portadorCartaoFiltro(evento) {
      if (evento.target.value == "") {
        this.portadorCartao = "Nome do portador";
      } else {
        this.portadorCartao = evento.target.value;
      }
    },
    vencimentoCartaoFiltro(evento) {
      if (evento.target.value == "") {
        this.numeroCartao = "0000 0000 0000 0000";
      } else if (evento.target.value.length > 16) {
        evento.target.value = evento.target.value.slice(0, 16);
      } else if (/[a-zA-Z]/.test(evento.target.value) === true) {
        evento.target.value = "";
      } else {
        let valor = evento.target.value;
        this.numeroCartao = valor.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
      }
    },
    filtrarCvc(evento) {
      const valor = evento.target.value;
      if (valor.length > 3) {
        evento.target.value = valor.slice(0, 3);
        valor = valor.slice(0, 3);
      } else {
        this.cvc = valor;
      }
    },
    confirmar() {
      if (
        this.numeroCartao != "0000 0000 0000 0000" &&
        this.portadorCartao != "Nome do portador" &&
        this.vencimentoCartaoAno != "" &&
        this.vencimentoCartaoMes != "Vencimento" &&
        this.cvc != "000"
      ) {
        this.confirmarBotao = !this.confirmarBotao;
      }
    },
  },
});
