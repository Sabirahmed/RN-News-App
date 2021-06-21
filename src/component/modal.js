import React from 'react'
import { Modal, Dimensions, Share } from 'react-native';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';
import { WebView } from 'react-native-webview';

const webViewHeight = Dimensions.get('window').height - 56;

const  ModalComponent = (props) => {

    const url = props.articleData?.url;
    const title = props.articleData?.title;

    const handleClose = () => {
        return props.onClose();
    };

    const handleShare = () => {
       const message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
       return Share.share(
           {title, message, url:message},
           {dialogTitle:`Share ${title}`}
       )
    }
    
    if( url != undefined ) {
        return (
            
            <Modal 
                animationType='slide'
                transparent
                visible={props.showModal}
                onRequestClose= {handleClose}
            >
                <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'#009387'}}>
                        <Left>
                            <Button onPress={handleClose} transparent>
                                <Icon name="close" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={handleShare} transparent>
                                <Icon name="share" style={{color: 'white', fontSize: 12}}/>
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                
                </Container>
            </Modal>
        )
    }else {
        return null;
    }
    
}

export default ModalComponent;
