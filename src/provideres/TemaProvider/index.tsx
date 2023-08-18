import { useTema } from "@hooks/useTema"
import { ThemeProvider } from "styled-components/native"

const TemaProvider = ({ children }: any) => {
    const { temaSelecionado } = useTema();
    return <ThemeProvider theme={temaSelecionado}>{children}</ThemeProvider>
}

export default TemaProvider;