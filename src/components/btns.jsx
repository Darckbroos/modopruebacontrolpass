import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState, useEffect } from 'react';
import { Drawer, Grid, Hidden } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Container } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

export function MuiDrawerLeftts() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch('./json/datauser.json');
        const jsonData = await response.json();
        setData(jsonData);
      };
      fetchData();
    }, []);
  
    const [secondDrawerOpen, setSecondDrawerOpen] = useState(false);
    const [firstDrawerOpen, setFirstDrawerOpen] = useState(false);
    
    const list2 = () =>( 
  <div>
  <Grid>
      <Box zIndex="modal">
      <Grid>
        <Box 
            role="presentation"
            
            
            >
      <Button onClick={() => setSecondDrawerOpen(false)} onKeyDown={() => setSecondDrawerOpen(false)} startIcon={<CloseIcon  />} ></Button>
      
        </Box>
     </Grid>
        {data.map((item, index) => (
              <Grid item key={index}>
                <List>
                  <Card sx={{ maxWidth: 270 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image= {item.imagen}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          nombre: {item.nombre}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                          Localizacion de ingreso: {item.descripcion}
                        </Typography>

                        <Grid mt={3}>
                          <Typography variant="body2" color="text.secondary">
                            fecha: {item.fecha}
                          </Typography>
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </List>
              </Grid>
            ))}

      </Box>
      </Grid>
  </div>
    )

      const list = () =>( 
    
    
      <div >
        <Box >
            <Box 
            role="presentation"
            >
        <Button onKeyDown={() => setFirstDrawerOpen(false)} onClick={() => setFirstDrawerOpen(false)} startIcon={<CloseIcon  />} ></Button>
        
        </Box>
            <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 1 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
            
        </Box>
        </div>
      )
     return (
       <div>
                <div style={{
                    maxWidth: 90,
                    minWidth: 0,
                    position: 'fixed',
                    top: 80
                }}>

                <Box>
                    <Grid >
                    <Button id='drawer1' variant="contained"  onClick={() => {setFirstDrawerOpen(true); setSecondDrawerOpen(false);}} startIcon={<DehazeIcon  />}></Button>
                    </Grid>
                    </Box>
                <Drawer
                anchor={'left'}
                open={firstDrawerOpen}
                onClose={() => setFirstDrawerOpen(false)}
                variant ="persistent" 
                
                
                >

                <div style={{
                    marginTop:65  
                }}>
                {list()}
                </div>
                
                
                
                </Drawer>
                <Hidden>
                    
                </Hidden>
                </div>


                <div style={{
                    maxWidth: 90,
                    minWidth: 0,
                    position: 'fixed',
                    right: 0,
                    top: '50%'
                }}>
                <Container maxWidth="xl">
                    <Box  >
                        <Grid variant="h1" >
                        <Button id='drawer2' variant="contained" onClick={() => {setFirstDrawerOpen(false); setSecondDrawerOpen(true);}} startIcon={<KeyboardDoubleArrowLeftIcon />}></Button>
                        </Grid>
                    </Box>
                </Container>
                <Drawer
                anchor={'right'}
                open={secondDrawerOpen}
                onClose={() => setSecondDrawerOpen(false)}
                variant ="persistent"
                
                >
                <div style={{
                    marginTop:65
                }}>
                {list2()}
                </div>
                </Drawer>
                
                </div>
                                    
                </div>
     )
   }
  
  
  
  
  