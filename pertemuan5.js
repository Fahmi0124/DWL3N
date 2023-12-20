function contohIfElse()
{
	let nilai = prompt("Input Nilai Akhir")
	let grade = "";

	//kondisi if else
	if (nilai >= 80) grade = "A"
		else if (nilai >= 78) grade = "B"
			else if (nilai >= 68) grade = "C"
				else if (nilai >= 58) grade = "D"
					else grade = "E"
}