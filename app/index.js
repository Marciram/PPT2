import React from 'react';
import { TextInput, Stack, Button, Text } from "@react-native-material/core";
import useLogica from './useLogica';
const Home = () => {

    const { opcionPiedra,opcionPapel, opcionTijera, opcion } = useLogica('');
 return (
    <Stack spacing={2} style={{ margin: 16 }}>

        <Button title="Piedra" onTouchEnd= {opcionPiedra}  />
        <Button title="Papel" onTouchEnd= {opcionPapel}  />
        <Button title="Tijera" onTouchEnd= {opcionTijera}  />
        <Text style={{ margin: 16 }}>
            {opcion}
        </Text>

        

    </Stack>

 )
}
export default Home;