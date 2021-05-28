
// Express
const app = require("express")();

// Config Json
const bodyParser = require("body-parser");

var cors = require('cors')

const nodemailer = require("nodemailer");


const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.use(cors())

app.use(bodyParser.json());

app.post("/send-email", async ( req, res ) => {
  const message = {
    text: `Informações de Formulario - Empresa ${req.body.nomeDaEmpresa}`,
    subject: `Informações de Formulario - ${req.body.nomeDaEmpresa}`,
    from: "ASO GO <emailsasogo@gmail.com",
    to: ["horyuarthur@gmail.com"],
    html: `


    <table border="0" align="center" cellpadding="0" cellspacing="0" class="tableBorderExternal">
        <form>

        </form>
        <tr>
            <td align="center" valign="top">
                <table width="620" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td height="5" colspan="3" align="left" valign="middle">&nbsp;</td>
                    </tr>
                    <tr>
                        <td height="20" colspan="2" class="tdTitulo">GUIA
                            DE ENCAMINHAMENTO PARA EXAME M&Eacute;DICO OCUPACIONAL</td>
                    </tr>
                    <tr>
                        <td width="220" valign="middle" class="tdTituloCampos">NOME DA EMPRESA:</td>
                        <td width="185" valign="top"><input name="nomeDaEmpresa" disabled value="${req.body.nomeDaEmpresa}" $company_name"}}"
                                class="cssFieldText" id="nomeDaEmpresa" style="background-color: white" size="65"
                                maxlength="70"></td>
                    </tr>
                    <tr>
                        <td width="120" valign="middle" class="tdTituloCampos">TELEFONE:</td>
                        <td width="385" valign="top"><input id="telefone" name="nomeDaEmpresa" disabled value="${req.body.telefone}" $phone"}}"
                                class="cssFieldText" style="background-color: white" size="65" maxlength="70"></td>
                    </tr>
                    <tr>

                        <td colspan="2" align="center" valign="middle">

                            <font size="2" face="Times New Roman, Times, serif"><b>
                                    <font size="3">ASO - Assessoria
                                        em Sa&uacute;de Ocupacional
                                    </font><br>
                                    Rua Abel Pereira de Castro, n&ordm; 484 - Centro - Fone: (64) 3621-3908
                                </b></font>
                        </td>
                    </tr>
                </table>
                <hr>
                <table width="620" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td width="250" valign="middle" class="tdTituloCampos">Encaminhamos o Sr(a): </td>
                        <td width="370" valign="middle" class="tdTituloCampos"><input name="nomeDoPaciente" disabled value="${req.body.nomeDoPaciente}"
                                $name"}}" class="cssFieldText" style="background-color: white" id="nomeDoPaciente"
                                size="68" maxlength="70"></td>
                    </tr>
                    <tr>
                        <td width="250" valign="middle" class="tdTituloCampos">Data Nascimento:
                        <td width="370" valign="middle" class="tdTituloCampos"><input name="nascimentoDoPaciente"
                                value="${req.body.nascimentoDoPaciente}" disabled $date_birth"}}" class="cssFieldText" id="nascimentoDoPaciente" size="10"
                                maxlength="10" OnKeypress="return valida_data(event, this);">
                            {{--&nbsp;&nbsp;&nbsp;&nbsp;Natural de:--}}</td>
                    <tr>
                        <td width="250" valign="middle" class="tdTituloCampos">Natural de:
                        <td width="370" valign="middle" class="tdTituloCampos"><input name="naturalidadeDoPaciente"
                                value="${req.body.naturalidadeDoPaciente}" disabled $naturalness"}}" class="cssFieldText" id="naturalidadeDoPaciente" size="68"
                                maxlength="70" onBlur="upperMe(this);"></td>
                    </tr>
                    <tr>
                        <td valign="middle" class="tdTituloCampos">Setor
                            <input name="setorDoPaciente" disabled value="${req.body.setorDoPaciente}" $sector"}}" class="cssFieldText"
                                id="setorDoPaciente" size="20" maxlength="40" onBlur="upperMe(this);">
                        </td>

                        <td valign="middle" class="tdTituloCampos">Fun&ccedil;&atilde;o:
                            <input name="funcaoDoPaciente" disabled value="${req.body.funcaoDoPaciente}" $function"}}" class="cssFieldText"
                                id="funcaoDoPaciente" size="55" maxlength="60" onBlur="upperMe(this);">
                        </td>
                    </tr>
                    <tr bgcolor="#E1E1E1">
                        <td height="20" valign="middle" class="tdTituloCampos">&nbsp;&nbsp;A ser preenchido pela ASO
                        </td>
                        <td height="20" valign="middle" class="tdPreenchimentoASO">Peso: _________ &nbsp;&nbsp;Altura:
                            ____________ &nbsp;&nbsp;PA:
                            ____________________</td>
                    </tr>
                </table>
                <hr>
                <table width="620" height="183" border="0" cellpadding="0" cellspacing="0">
                    <tr valign="top">
                        <td height="15" colspan="2" class="tituloExameSel">
                            <font size="2" face="Times New Roman, Times, serif"><b>
                                    <input name="rdExames" type="radio" id="rdAdmissional" value={'ADMISSIONAL'
                                    ? 'checked' : '' } {{$type_exam=='ADMISSIONAL'
                                        ? 'checked' : '' }}>
                                </b></font>
                            ADMISSIONAL
                        </td>
                    </tr>
                    <tr valign="top">
                        <td height="15" colspan="2" class="tituloExameNoSel" id="DEM">
                            <font size="2" face="Times New Roman, Times, serif"><b>
                                    <input name="rdExames" type="radio" id="rdDemissional" {{$type_exam=='DEMISSIONAL'
                                        ? 'checked' : '' }}>
                                </b></font>
                            DEMISSIONAL
                        </td>
                    </tr>
                    <tr valign="top">
                        <td height="15" colspan="2" class="tituloExameNoSel" id="PER">
                            <font size="2" face="Times New Roman, Times, serif"><b>
                                    <input name="rdExames" type="radio" id="rdPeriodico" {{$type_exam=='PERIÓDICO'
                                        ? 'checked' : '' }}>
                                </b></font>
                            PERI&Oacute;DICO
                        </td>
                    </tr>
                    <tr valign="top">
                        <td height="15" colspan="2" class="tituloExameNoSel" id="RET">
                            <font size="2" face="Times New Roman, Times, serif"><b>
                                    <input name="rdExames" type="radio" id="rdRetorno"
                                        {{$type_exam=='RETORNO AO TRABALHO' ? 'checked' : '' }}>
                                </b></font>
                            RETORNO AO TRABALHO
                        </td>
                    </tr>

                    <tr valign="top">
                        <td width="166" height="38" class="tituloExameNoSel" id="MUF">
                            <font size="2" face="Times New Roman, Times, serif"><b>
                                    <input name="rdExames" {{$type_exam=='MUDANÇA DE FUNÇÃO' ? 'checked' : '' }}
                                        type="radio" id="rdMudaFuncao">
                                </b></font>
                            MUDAN&Ccedil;A DE FUN&Ccedil;&Atilde;O
                        </td>
                        <td width="300" height="38" class="tdTituloCampos">Nova Fun&ccedil;&atilde;o:<br>
                            <input name="new_function" id="new_function" disabled value="${req.body.new_function}" class="cssFieldText" size="85"
                                maxlength="80">
                        </td>
                    </tr>
                    <tr valign="top">
                        <td height="85" class="tituloExameSel" id="OUT">
                            <font size="2" face="Times New Roman, Times, serif"><b>
                                    <input name="type_exam_other" type="radio" id="rdMudaFuncao"
                                        @if(isset($type_exam_other)=='OUTROS' ) checked @endif>
                                </b></font>
                            OUTROS
                        </td>
                        <td height="85" class="tdTituloCampos">Especificar:<br>
                            <input name="bugRadioButton" type="hidden" id="bugRadioButton" value="ADM">
                            <textarea disabled id="description" style="text-align: left; position: relative" name="description" cols="86" rows="8"
                                class="cssFieldText">${req.body.description}</textarea>
                        </td>
                    </tr>
                </table>
                <table border="0" cellspacing="0" cellpadding="0" align="center" width="640px">
                    <tbody>
                        <tr valign="middle">
                            <td width="114" class="tdTituloCampos">Data:
                                <input name="dataDaGuia" value="${new Date().toLocaleDateString('pt-br')}" id="dataDaGuia" class="tdTituloCampos"
                                    style="background-color: white; border: 0" size="10" maxlength="10">
                            </td>
                            <td colspan="2" class="tdTituloCampos">Assinatura do Encaminhador:
                                _______________________________________________</td>
                        </tr>
                        <tr valign="middle">
                            <td width="264" class="tdTituloCampos">&nbsp;</td>
                            <td></td>
                            <td valign="top" class="tdTituloCampos">
                                <input name="encaminhador" value="{{$forward}}" class="cssFieldTextEmissor" size="58"
                                    maxlength="58" style="background-color: white; border: 0; left: auto">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>

        </tr>
    </table>
    `,
  }

    // Verification error send email
    await transporter.sendMail(message, (error, info) => {
      if (error) {
        // return error 
        return res.status(400).send({"Erro": "Algo deu errado"})
      }
    })

  return res.status(200).send({"Enviou": "Deu certo man"})

})


// Server listen -> ok
app.listen(3000, () => {
  console.log('Server On')
})


