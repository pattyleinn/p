import { HttpBackend, HttpClient, HttpClientModule } from "@angular/common/http";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import { generate_data_url } from "./generateDataUrl";


(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
(<any>pdfMake).fonts = {
    'Roboto': {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-Italic.ttf'
    }
  };


const generate_tags = (data: any): any[] =>{
    var tags: any[] = []
    data['item-tag'].map((item: string)=>(
        tags.push(
            {
                text: item,
                style: 'regular'
            }
        )
        
    ))
    return tags
}
export const print_single_item = (data: any)=>{
    if( typeof data['item-img'] !== 'undefined' && data['item-img'].length  !== 0){
        generate_data_url(data['item-img'], (result)=>{
            if(typeof result !== 'undefined'){
                const content_description: TDocumentDefinitions = {
                    content: [
                        {
                            alignment: 'justify',
                            style:"container",
                            columns: [
                                {
                                    text: data['item-name'],
                                    style: 'header',
                                    alignment: 'center'
                                },
                                {
                                    image: result,
                                    width: 300,
                                    height: 200,
                                }
                            ]
                        },
                        {
                            alignment: 'justify',
                            style: 'container',
                            columns: [
                                [
                                    {
                                        text: "Description",
                                        style: 'subheader'
                                    },
                                    {
                                        text: data['item-description']
                                    },
                                    {
                                        text: "State",
                                        style: 'subheader'
                                    },
                                    {
                                        text: data['item-state']
                                    },
                                    {
                                        text: "Category",
                                        style: 'subheader'
                                    },
                                    {
                                        text: data['item-category']
                                    }
                                ],
                                [
                                    {
                                        text: "Tags",
                                        style: 'subheader'
                                    }, 
                                    {
                                        ul: [
                                            ...generate_tags(data)
                                        ]
                                    }
                                ],
                                
                            ], 
                           
                        },
                        
                    ],
                    styles: {
                        header:{
                            fontSize: 20,
                            bold: true,
                        },
                        subheader: {
                            fontSize: 18,
                        },
                        regular: {
                            fontSize: 16,
                        },
                        container: {
                            margin: 20
                        }
                    }
                }
            
                pdfMake.createPdf(content_description).open()
            }
        })
    }else{
        const content_description: TDocumentDefinitions = {
            content: [
                {
                    alignment: 'justify',
                    style:"container",
                    columns: [
                        {
                            text: data['item-name'],
                            style: 'header',
                            alignment: 'center'
                        },
                        {
                            text: "No image was provided"
                        }
                    ]
                },
                {
                    alignment: 'justify',
                    style: 'container',
                    columns: [
                        [
                            {
                                text: "Description",
                                style: 'subheader'
                            },
                            {
                                text: data['item-description']
                            },
                            {
                                text: "State",
                                style: 'subheader'
                            },
                            {
                                text: data['item-state']
                            },
                            {
                                text: "Category",
                                style: 'subheader'
                            },
                            {
                                text: data['item-category']
                            }
                        ],
                        [
                            {
                                text: "Tags",
                                style: 'subheader'
                            }, 
                            {
                                ul: [
                                    ...generate_tags(data)
                                ]
                            }
                        ],
                        
                    ], 
                   
                },
                
            ],
            styles: {
                header:{
                    fontSize: 20,
                    bold: true,
                },
                subheader: {
                    fontSize: 18,
                },
                regular: {
                    fontSize: 16,
                },
                container: {
                    margin: 20
                }
            }
        }
    
        pdfMake.createPdf(content_description).open()
    }
    
   
}