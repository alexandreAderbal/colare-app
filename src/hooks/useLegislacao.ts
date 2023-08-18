
import { buscarLegislacaoAction } from '@store/thunk/buscarLegislacoes';
import { ILegislacaoModelProps } from '@model/legislacao';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';
import { PermissionsAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import { useEffect } from 'react';

export function useLegislacao() {
    const dispatch = useAppDispatch();
    const { legislacoes } = useAppSelector((state) => state.legislacaoSlice);
    const { cidade } = useAppSelector((state) => state.cidadeSlice);

    const buscarLegislacao = () => {
        if (cidade?.codigoIBGE)
            dispatch(buscarLegislacaoAction(cidade?.codigoIBGE));
    }

    useEffect(() => {
        if (legislacoes.length === 0) buscarLegislacao();
    }, []);

    const downloadLegislacao = async (lei: ILegislacaoModelProps) => {
        if (await permissaoDownloadFile() && lei?.arquivoPrincipalNorma) {
            const { dirs } = RNFetchBlob.fs;
            const fileName = `${lei.numeroNorma} - ${lei.anoNorma} - ${lei.tipoNorma}.pdf`
            RNFetchBlob.config({
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    mediaScannable: true,
                    title: fileName,
                    path: `${dirs.DownloadDir}/${fileName}`,
                },
            })
                .fetch('GET', lei.arquivoPrincipalNorma, {})
                .then((res) => {
                    console.log('The file saved to ', res.path());
                })
                .catch((e) => {
                    console.log(e)
                });
        }
    }

    const permissaoDownloadFile = async () => {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                return true;
            } else {
                console.log('Permission Denied!', 'You need to give storage permission to download the file');
            }
        } catch (err) {
            console.warn(err);
        }
    }

    return { legislacoes, downloadLegislacao };
}
