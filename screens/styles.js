import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainImageWrapper: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageWrapper: {
        width: width * 0.8, //Platform.OS === 'ios' ? 320 : 300,
        height: height * 0.5, //Platform.OS === 'ios' ? 400 : 340,
        borderRadius: 25,
    },
    elevation: {
        elevation: 5,
        backgroundColor: '#222831',
        borderRadius: 25,
        shadowColor: '#ccc',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },
    musicImage: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
    },
    songContent: {
        textAlign: 'center',
        color: '#EEEEEE',
    },
    songTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    songArtist: {
        fontSize: 16,
        fontWeight: '300',
    },
    progressBar: {
        width: width * 0.89,
        right: 5,
        height: 40,
        marginTop: 15,
        flexDirection: 'row',
    },
    progressLevelDuration: {
        width: 340,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressLevelText: {
        color: '#fff',
        fontWeight: '500',
    },
    musicControlContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        marginVertical: 15,
    },
    bottomContainer: {
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        borderTopColor: '#393E46',
        borderWidth: 1,
    },
    bottomIconWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
});