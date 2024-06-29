const despesasService = require('../service/despesasService');
const transporter = require('../utils/mailer');

const registerDespesa = async (req, res) => {
    try {
        const {
            idViagem,
            dataNota,
            cidadeNota,
            tipoDespesa,
            valor,
            descricao,
            notaFiscal,
            opcoesAlimentacao,
            tipoHospedagem,
            preferenciaEstadia,
            meioTransporte,
            especificarOutroTransporte
        } = req.body;

        if (!idViagem || !dataNota || !cidadeNota || !tipoDespesa || !valor || !descricao || !notaFiscal) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        const idFuncionario = req.user?.id; // Obtém o ID do funcionário a partir do usuário autenticado

        if (!idFuncionario) {
            return res.status(400).json({ error: 'ID do funcionário não encontrado' });
        }

        const data = {
            idViagem,
            idFuncionario,
            dataNota,
            cidadeNota,
            tipoDespesa,
            valor,
            descricao,
            notaFiscal, // Altere conforme o tipo de dados esperado
            opcoesAlimentacao,
            tipoHospedagem,
            preferenciaEstadia,
            meioTransporte,
            especificarOutroTransporte
        };

        const despesaRegistrada = await despesasService.registerDespesa(data);

        // Envio de email de lembrete
        const dataLembrete = new Date(dataNota);
        dataLembrete.setDate(dataLembrete.getDate() - 1);

        const mailOptions = {
            from: 'jeffleygarcon007@gmail.com',
            to: req.user.email, // Substituir pelo email do destinatário
            subject: 'Lembrete de despesa',
            text: 'Lembrete de despesa'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Erro ao enviar email:', error);
            } else {
                console.log('Email enviado com sucesso:', info.response);
            }
        });

        res.status(201).json({ message: 'Despesa cadastrada com sucesso', despesa: despesaRegistrada });
    } catch (error) {
        console.error('Erro ao cadastrar despesa:', error.message);
        res.status(500).json({ error: 'Erro interno ao cadastrar despesa' });
    }
};



const listAllDespesas = async (req, res, next) => {
    try {
        const despesas = await despesasService.listAllDespesas();
        res.status(200).json({ despesas });
    } catch (error) {
        console.error('Erro ao listar despesas:', error);
        res.status(500).json({ error: 'Erro interno ao listar despesas' });
    }
};

const getDespesaById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const despesa = await despesasService.getByIdDespesa(id);
        if (!despesa) {
            return res.status(404).json({ error: 'Despesa não encontrada' });
        }
        res.status(200).json({ despesa });
    } catch (error) {
        console.error('Erro ao buscar despesa por ID:', error);
        res.status(500).json({ error: 'Erro interno ao buscar despesa por ID' });
    }
};

const updateDespesa = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { dataNota, email } = req.body;

        if (!dataNota) {
            return res.status(400).json({ error: 'Data da nota é obrigatória' });
        }

        const despesaAtualizada = await despesasService.updateDespesa(id, { dataNota, email });

        res.status(200).json({ message: 'Despesa atualizada com sucesso', despesa: despesaAtualizada });
    } catch (error) {
        console.error('Erro ao atualizar despesa:', error);
        res.status(500).json({ error: 'Erro interno ao atualizar despesa' });
    }
};

const deleteDespesa = async (req, res, next) => {
    try {
        const { id } = req.params;
        await despesasService.removeDespesa(id);
        res.status(200).json({ message: 'Despesa deletada com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar despesa:', error);
        res.status(500).json({ error: 'Erro interno ao deletar despesa' });
    }
};

module.exports = {
    registerDespesa,
    listAllDespesas,
    getDespesaById,
    updateDespesa,
    deleteDespesa
};
