<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.sql.*"%>
<%
    String BookerName = request.getParameter("BookerName");         //이름
    String BookerPhone = request.getParameter("BookerPhone");   	//전화번호
    String MenuName = null;
    int MenuPrice;
    //*********사진 변수 추가*********

    Connection myConn = null;
    Statement stmt = null;
    String query = null;

    String dburl = "jdbc:mysql://localhost:3306/project?serverTimezone=UTC";
    String user = "id"; 		// 아이디
    String passwd = "passwd"; 	// 패스워드
    String dbdriver = "com.mysql.jdbc.Driver";

    Class.forName(dbdriver);
    myConn = DriverManager.getConnection(dburl, user, passwd);
    stmt = myConn.createStatement();

    //메뉴의 이름, 가격, 사진 가져오기
    query = "select MenuName, MenuPrice, MenuImage from menu";

    ResultSet rs = stmt.executeQuery(query);

    while(rs.next()) {
        MenuName = rs.getString(1);
        MenuPrice = rs.getInt(2);

        //*****사진 SELECT*********

        /*
        가져온 정보 출력
         */
    }

    stmt.close();
    myConn.close();
%>

