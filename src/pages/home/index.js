import React, { useState } from 'react';
import { Modal, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/api-json-server';


import Header from '../../components/header';
import styles from './home-style';



export default function Home() {

    const [vis , setVis] = useState(false);

    const [inputId , setInpId] = useState("");

    const [nomeAlu, setNomeAlu] = useState("Nome do Aluno");
    const [nota1, setNota1] = useState("0");
    const [nota2, setNota2] = useState("0");
    const [nota3, setNota3] = useState("0");

    function modalVis(){
        setVis(true);
    }

    function aluInfo(e){
        

        if(e.alunos[Number(inputId)-1]){
            setNomeAlu(e.alunos[Number(inputId)-1].nome);
            setNota1(String(e.alunos[Number(inputId)-1].nota1));
            setNota2(String(e.alunos[Number(inputId)-1].nota2));
            setNota3(String(e.alunos[Number(inputId)-1].nota3));

            modalVis();
        }else{
            alert("Insira um ID válido");
            setInpId("");
        }


        return true;
    }

    async function getInfo(){
        const alunos = await api.get('db.json');
        const alunos_obj = alunos.data;

        aluInfo(alunos_obj);
        
        // console.log(alunos_obj.alunos[0].nome);
    }

    return (
        <View style={styles.container}>

            <View>
                <Modal animationType="slide" visible={vis}>

                    <View style={styles.cont_modal}>
                        <TouchableOpacity onPress={()=>{setVis(false)}}>
                            <Text style={styles.close_modal}>&times;</Text>
                        </TouchableOpacity>

                        <View style={styles.content_modal}>
                            <View>
                                <Text style={styles.label_nome}>Aluno:</Text>
                                <TextInput style={styles.inp_nome_modal}
                                    value={nomeAlu} />
                            </View>

                            <View style={styles.cx_notas}>
                                <View style={styles.item_nota}>
                                    <Text style={styles.title_nota}>Nota 1:</Text>
                                    <TextInput style={styles.inp_nota} value={nota1} editable={false} />
                                </View>

                                <View style={styles.item_nota}>
                                    <Text style={styles.title_nota}>Nota 2:</Text>
                                    <TextInput style={styles.inp_nota} value={nota2} editable={false} />
                                </View>

                                <View style={styles.item_nota}>
                                    <Text style={styles.title_nota}>Nota 3:</Text>
                                    <TextInput style={styles.inp_nota} value={nota3} editable={false} />
                                </View>
                            </View>
                        </View>
                    </View>

                </Modal>
            </View>

            <View style={styles.header_cont}>
                <Header />
            </View>

            <ImageBackground
                source={require("../../img/bg.jpg")} style={styles.content}>
                <View style={styles.content_color}>

                    <View style={styles.cx_title}>
                        <Text style={styles.h1}>Informe o ID de um Aluno</Text>
                        <Text style={styles.h2}>Ao inserir o ID e clicar no botão abaixo, as informações do aluno aparecerão logo em seguida.</Text>
                    </View>

                    <View style={styles.cx_form}>
                        <View style={styles.form}>

                            <TextInput style={styles.input_num}

                                onChangeText={(value)=>setInpId(value)}

                                placeholder="ID" keyboardType="numeric" />

                            <TouchableOpacity onPress={getInfo}
                                style={styles.btn_inp}>
                                <Text style={styles.btn_inp_text}>Buscar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ImageBackground>
        </View>
    );
}