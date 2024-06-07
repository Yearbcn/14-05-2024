import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';
import Button from '../../src/components/Button';
import CheckBox from '@react-native-community/checkbox';

export default function Privacy({navigation, route}) {
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        setIsChecked(route.params.isChecked)
    }, [])
    return (
        <SafeAreaView>
            <StatusBar translucent={false} barStyle={'dark-content'}/>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.containerStyle}>
                <Text style={styles.title}>Política de privacitat</Text>
                <Text style={styles.paragraph}>
                    Términos y condiciones de uso
                    Términos y Condiciones regulan la descarga, el acceso y el uso de la aplicación móvil cuya
                    APLICACIÓN, MEDISTORIS pone a disposición de los usuarios. El usuario adquiere esta
                    condición en el momento de descargarla y utilizarla.

                    Esta versión de APLICACIÓN está disponible en Google Play y App Store. El acceso a la
                    APLICACIÓN comporta que el usuario reconoce haber aceptado y consentido estas condiciones
                    de uso.

                </Text>
                <Text style={styles.paragraphTitle}>
                    1. OBJETO
                </Text>
                <Text style={styles.paragraph}>

                    Poder escuchar audios culturales, de forma amigable y con contenido de calidad.
                    Funciona en tabletas y en un teléfono móvil con sistema operativo Android o IOS.

                </Text>
                <Text style={styles.paragraphTitle}>
                    2. FUNCIONALIDADES
                </Text>
                <Text style={styles.paragraph}>

                    Para usuarios anónimos y registrados: un usuario anónimo puede acceder a todas sus
                    funcionalidades. HISTORIAS y LEYENDAS catalanas, DICHAS y refranes, CANCIONES
                    POPULARES CATALANAS.

                </Text>
                <Text style={styles.paragraphTitle}>
                    3. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL
                </Text>
                <Text style={styles.paragraph}>

                    Los derechos de propiedad intelectual e industrial sobre la APLICACIÓN son titularidad de
                    MEDISTORIS, a quienes corresponde el ejercicio exclusivo de los derechos de explotación en
                    cualquier forma y, en especial, los derechos de reproducción, distribución, comunicación pública y
                    transformación.
    
                    El usuario reconoce que la reproducción, modificación, distribución, comercialización,
                    descompilación, desensamblaje, utilización de técnicas de ingeniería inversa o de cualquier otro
                    medio para obtener el código fuente, la transformación o la publicación de cualquier resultado de
                    pruebas de referencias autorizadas de cualquiera de los elementos y utilidades integradas dentro
                    del desarrollo constituye una infracción de los derechos de propiedad intelectual de MEDISTORIS,
                    comprometiéndose, en consecuencia, a no efectuar ninguna de las acciones mencionadas.

                </Text>
                <Text style={styles.paragraphTitle}>
                    4. POLÍTICA DE PRIVACIDAD
                </Text>
                <Text style={styles.paragraph}>

                    ¿Quién es el responsable del tratamiento de sus datos personales? MEDISTORIS.cat. es el
                    responsable del tratamiento de los datos personales del usuario y le informa que estos datos se
                    tratarán de conformidad con lo que establece el Reglamento (UE) 2016/679, de 27 de abril
                    (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), por lo que se le facilita la
                    siguiente información del tratamiento:

                    ¿Por qué tratamos sus datos personales? para las finalidades descritas en el apartado “1.
                    OBJETO »

                    ¿Por qué motivo podemos tratar sus datos personales?: Ser necesario para la relación
                    contractual, de la que es parte, que supone la aceptación de estos términos y condiciones de uso
                    (art. 6.1.b GDPR).

                    ¿Durante cuánto tiempo guardaremos sus datos personales? Lo necesario para mantener la
                    finalidad del tratamiento, mientras dure la relación contractual objeto del uso de la APLICACIÓN
                    (incluido el tiempo de conservarlas durante los plazos de prescripción aplicables), y cuando ya no
                    sean necesarias para tal fin, se suprimirán con medidas de seguridad adecuadas para garantizar
                    que los datos sean anonimizados.

                    Los proveedores que necesiten acceder a los datos personales del usuario para proporcionar los
                    servicios que MEDISTORIS les haya contratado, o que por el propio funcionamiento de los
                    servicios electrónicos (aplicación, página web y correos electrónicos) puedan tener acceso a
                    determinados datos personales.

                    MEDISTORIS ha formalizado con todos ellos contratos de confidencialidad y de encargo de
                    tratamiento de datos personales necesarios y exigidos por la normativa para proteger su
                    privacidad (artículo 28.3 GDPR).

                    ¿Cuáles son los derechos del usuario? Derecho a retirar su consentimiento en cualquier
                    momento. Derecho de acceso, rectificación, portabilidad y supresión de sus datos y de limitación u
                    oposición a su tratamiento. Derecho a presentar reclamación ante la autoridad de control                         
                    (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.

                    Datos de contacto para ejercer sus derechos: E-mail: app@medistoris.cat

                </Text>
                <Text style={styles.paragraphTitle}>
                    5. CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO
                </Text>
                <Text style={styles.paragraph}>

                    Los usuarios, por medio de las casillas correspondientes y la introducción de datos en los campos,
                    marcados con un asterisco (*) en los formularios de la APLICACIÓN, aceptan expresamente y de
                    forma libre e inequívoca, que sus datos personales son necesarios para atender su petición, por
                    parte del prestamista, y que por tanto la inclusión de los datos en los campos restantes es
                    voluntaria. El usuario garantiza que los datos personales facilitados a MEDISTORIS son verídicos
                    y se hace responsable de comunicar cualquier modificación.

                    MEDISTORIS informa que todos los datos solicitados a través de la APLICACIÓN son necesarios
                    para proporcionar un servicio óptimo al Usuario. En caso de que no se faciliten todos los datos, no
                    se garantiza que la información y servicios facilitados se ajusten completamente a sus necesidades.

                </Text>
                <Text style={styles.paragraphTitle}>
                    6. MEDIDAS DE SEGURIDAD
                </Text>
                <Text style={styles.paragraph}>

                    De conformidad con lo que establecen las normativas vigentes en protección de datos personales,
                    el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD
                    
                    Se realizarán copias de seguridad almacenadas en servidores locales y con los datos cifrados.
                    Para más información sobre las garantías de su privacidad, puede dirigirse a MEDISTORIS a
                    través de www.medistoris.cat.

                </Text>
                <Text style={styles.paragraphTitle}>
                    7. EXCLUSIÓN DE RESPONSABILIDAD
                </Text>
                <Text style={styles.paragraph}>

                    MEDISTORIS se reserva el derecho de editar, actualizar, modificar, suspender, eliminar o finalizar
                    los servicios que ofrece la APLICACIÓN, incluido todo o parte de su contenido, sin necesidad de
                    previo aviso, y de modificar su forma o tipo de acceso.

                    MEDISTORIS no se hace responsable del uso de la APLICACIÓN que realiza un menor de edad,
                    ya que la descarga y el uso de la APLICACIÓN son responsabilidad exclusiva del usuario.

                </Text>
                <Text style={styles.paragraphTitle}>
                    8. LEGISLACIÓN Y JURISDICCIÓN
                </Text>
                <Text style={styles.paragraph}>

                    El usuario acepta que la legislación competente.

                </Text>
                <View style={{flexDirection: 'row', marginVertical: 6, alignItems: 'center', width: '100%'}}>
                    <CheckBox
                        style={{marginRight: 8, display: "flex"}}
                        value={isChecked}
                        onValueChange={setIsChecked}
                    />
                    <Text numberOfLines={2} style={{display: 'flex', flex: 1}}>He leído y acepto las condiciones de uso de la APLICACIÓN.</Text>
                </View>

                <Button
                    title="Registra't"
                    onPress={() => {
                        if (isChecked) {
                            navigation.navigate('SignupScreen', {isChecked: isChecked});
                        } else {
                            alert("Has d'acceptar la política de privacitat");
                        }
                    }}
                    style={{
                        marginTop: 22,
                        width: '100%',
                    }}
                    disabled={!isChecked}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
    containerStyle: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 50,
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
        marginBottom: 15,
        lineHeight: 25,
    },
    paragraphTitle: {
        fontSize: 17,
        marginBottom: 15,
        fontWeight: 'bold',
        lineHeight: 25,
    },
});
