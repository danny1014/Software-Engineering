<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="java.sql.*"%>
<%
	String BookerName = request.getParameter("BookerName");         //이름
	String BookerPhone = request.getParameter("BookerPhone");   	//전화번호
	String menu_name = null;
	String ResTime = null;
	String Booker = null;
	String BookerPaymentInfo = null;
	int ResSeat;
	int BookerPeopleNum;
	String Significant = null;
	Timestamp timestamp = null;		//시간 데이터를 매핑할 Timestamp 변수
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

	//사용자가 예약한 메뉴(사진, 이름) 모두 가져오기
	query = "select menu_photo, menu_name from menu_reservation where BookerName=' " + BookerName + "' and BookerPhone='" + BookerPhone + "'";

	ResultSet rs = stmt.executeQuery(query);

	while(rs.next()) {
		//*****사진 SELECT*********
		menu_name = rs.getString(2);
	}


	//예약자의 이름과 번호와 일치하는 예약 정보(ResTime, ResSeat)와 예약자 정보(BookerPaymentInfo, BookerPeopleNum, Significant)
	query = "select ResTime, ResSeat, BookerPaymentInfo, BookerPeopleNum, Significant from RESERVATION, BOOKER where BookerName=' " + BookerName + "' and BookerPhone='" + BookerPhone + "'";

	rs = stmt.executeQuery(query);

	if (rs.next()) {
		timestamp = rs.getTimestamp("ResTime");
		ResSeat = rs.getInt(2);
		BookerPaymentInfo = rs.getString(3);
		BookerPeopleNum = rs.getInt(4);
		Significant = rs.getString(5);

		/*
		* 가져온 정보 출력
		* */

	} else {
%>

<script>
	alert("사용자아이디 혹은 암호가 틀렸습니다.");
	location.href = "reserve.jsp";		//********돌아갈 페이지 주소 입력*********
</script>
<%
	}
	stmt.close();
	myConn.close();
%>

