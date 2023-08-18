import store from "@store/index"
import { Provider } from "react-redux"
import TemaProvider from "./TemaProvider";
import RouterProvider from "./RouterProvider";

const Provideres = () => {

    return (
        <Provider store={store}>
            <TemaProvider>
                <RouterProvider />
            </TemaProvider>
        </Provider>
    )
}

export default Provideres;