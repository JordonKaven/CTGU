//
//  ViewController.swift
//  demos
//
//  Created by Vinsen on 16/11/14.
//  Copyright © 2016年 com.vinsen. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    var tableView:UITableView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        tableView = UITableView()
        tableView.frame = CGRect(x:0,y:0,width:SCREEN.width,height:SCREEN.height)
        
        self.view.addSubview(tableView)
        
    }


    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        
    }


}

