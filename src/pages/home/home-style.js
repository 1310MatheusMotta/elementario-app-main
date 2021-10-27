import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      backgroundColor: '#f4f4f4',
      alignItems: 'center'
    },

    header_cont:{
        width: "100%",
    },

    content:{
        width: "100%",
        height: "100%"
    },

    content_color:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#0B699ED4",
        paddingTop: 100
    },

    cx_title:{
        width: "100%",
        alignItems: "center",
    },

    h1:{
        width: "90%",
        borderBottomWidth: 3,
        borderColor: "#fff",
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        padding: 3
    },

    h2:{
        color: "#fff",
        fontSize: 18,
        textAlign: "center",
        marginTop: 3,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    },



    cx_form:{
        marginTop: 30,
        width: "90%",
        backgroundColor: "#fff",
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 15,
        paddingRight: 15
    },


    form:{
        width: "100%",
        flexDirection: "column",
        alignItems: "center"
    },


    input_num:{
        width: "100%",
        fontSize: 20,
        backgroundColor: "#f4f4f4",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    },

    btn_inp:{
        marginTop: 20,
        backgroundColor: "#BC1BAC",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40
    },

    btn_inp_text:{
        color: "#fff",
        fontSize: 20
    },

    //teste

    close_modal:{
        fontSize: 90,
        color: "#BC1BAC"
    },

    cont_modal:{
        paddingTop: 50,
        paddingBottom: 50,

        width: "100%",
        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#fff"
    },

    content_modal:{
        width: "90%"
    },

    label_nome:{
        fontSize: 20,
    },

    inp_nome_modal:{
        width: "100%",
        fontSize: 24,
        paddingTop: 40,
        paddingBottom: 3,
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: "center"
    },

    //notas

    cx_notas:{
        marginTop: 20,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center"
    },

    item_nota:{
        margin: 20,
    },

    title_nota:{
        fontSize: 20,
    },

    inp_nota:{
        fontSize: 20,
        padding: 7,
        borderWidth: 2,
        borderColor: "#222222D4"
    }

});

export default styles;