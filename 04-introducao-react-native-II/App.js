// imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

// Função que define o componente
// Retornar o que vai ser renderizado na tela ( Template feito com JSX )
export default function App() {
  // lógica do meu componente
  const nome = "Ricardo"

  function alerta() {
    alert("Clicou no botão!")
  }

  // retorno dessa função com o template do que vai ser renderizado na tela (JSX)
  return (
    /*
    ScrollView permite que o conteúdo vá até depois da barra de rolagem;
    Não pode ser usado sozinho, havendo a necessidade de uma tag View;
    Só envolve o conteúdo.
    */
   <ScrollView>

    <View style={styles.container}>
      {/* comentário dentro do JSX */}
      {/* */}
      {/* <StatusBar style="auto" /> */}
      {/* css inline */}
      <Text style={{ fontSize: 50, fontStyle: 'italic'}}>Texto no topo!</Text>

      {/* css com StyleSheet */}
      <Text style={styles.textGrande}>Segundo texto no topo!</Text>

      <Text>{nome}</Text>
      <Button title='Enviar' onPress={alerta}></Button>

      {/* Imagem de fora com link */}
      <Image
        source={{
          uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRUVFxUXFRUVFRcVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHSUwLSsrNystLS0tKy0rLS0rMSsrLSstLSstLi0rLS0tKystLSstLS0tLS0rLSstLS0xLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA8EAACAQIEAwYDBQgCAwEBAAABAgADEQQSITEFQVEGEyJhcYEHMpEUI0KhsVJigpLB0eHwM3KisvFDF//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAJBEBAQACAgICAgIDAAAAAAAAAAECEQMhEkExURNhcfAiMoH/2gAMAwEAAhEDEQA/APJVElURqiSqJGnVWTIsaokyCFORZKqxIJKqwO01koEVNZMqwOKJOiTqJJ0SFMWnJFpyZFkqpAjRIVQp6x1KnCadHUSoZTpXMIWjJ8PR1hS0pUC06Mm7sQgU53uoQGKUl7mE91HFIAXdwLi/EqWGTPVaw2CjVmPRRzP5QjjfFqWFTNUOpvkQfM5HIdB1Y6CeTcd4q+IqGo512AGyr0UchKjUVPiBTv4cO5Hm6j8gDJsH25wzm1RXpfvEZ19PDqPpPPBGHUyD1Idp8ExAFca9VcD3JWw95agAi41B1BGoI8jPGDpt9Ze9m+0r4YhGOajfVN8oO7IeXW2x1geklJE9OFU2DAMpBBAII2IIuCImSFVzUTBq1GWjCDVVgVL04PUpy0qU4LUSBU1acEqU5a1qcDqpIK804oQUigVaiSqJxRJFEinosmRY1RJkWRT1WTU1jUWTqsByLJ0SNprC6aSqVNJOqTtNJMqQpqpJUElSlJ6dHWVCo04ZRpx1KjC6FKGXKKawtaUdSpayYrKIe7nO6hISIwgYrG4l1pqXchVUXJPIf1PlIeO8UTC0jVfXkqjdm5KOnmeQnk/Gu0+IxBPeP4SbrSUAIvIebHfUnnfTSEV3Fcc+JrPVc6k7b5UHyoPQfnfrKuo1yZMXMgIlCBkYEeZGZBx40KY4RZoG17BcdykYWodGP3TX0BO6e+48zbnN4RPDFq2IIuCDcEbgjYg8jPXeynHlxdLXSqgAqDbU/iXyNj6QLIpIalOHNTkZEKq6iQaqktK9PnA6qQKqqkEqpLOqkFqpIKwpFJykUCjUSVRGIJMokaPRZOgkaCEU1kD6awhFjEWEIIVJTWEU1jKawuksqu01hFOmYqawqmkBU6UKo0p2ikLpLKlOpU4Zh6cbTSGUFlZdVNY8U5IBrJAkCDu42ogAJJAABJJ0AA1JJ6Qq0xvxK4saVHuUYAuLvrqEvZRbkGN/Zbc4S1hO2XHPtTswv3aNkpr0WxJY/vNpf0A5TLP5Q2q33f8AEP0gBlZNYxhEl9YxltAiYRpkjSO8imEThnWiMBstuzHFfsuIWoT4D4X/AOjbm3kQD7SpjhTJge9Ib+nWcajMx8OeL99Q7lj46Nl8zTPyH2sV9hNfaFV9SlAqtOXFRIFVpyCnqLBKqy1rU4BWWAAUik5WKBl0EmQRiiSqJGkiCEU1kSQmkJFSIsKorI6YhFOFTUxC6SyCmIZRWUS0khlKnIaYhtFYElOlCqNOR0hDKSSs0+mkKppG0lhCCVDkTWTZYkGskIgVfHOK08LRatUOg0A5s5+VR6/kATynh/EKz1CajsXZiXYm+rHUn0GgA5AATc/F5zmoLmsAGbyBJtfzPh9pgsL4kte9iRc2AsbkG59x7Sxi0BVJK673gyjaH4ulYmC00GYX5wiErrGuesKdZHluIUGwjJI620kUimxGK0REDkTPOGdWBedh8caWNpG9g57tvMVNB/5ZT7T2oLPnjMQQQbEEEHoRsZ75wPiQxOHpVh+NQTbk2zD2IMLBLLBayQ4iQ1FkVUVklfXSXNenK/EJCKsrOQgpFCsgokyiRoJMokU+msLorIKYhlISKmprCKaSOmsKprCpqSQyisgpLDaKyiakkNpJBlIGrEAeZtAsb2rwlD5qoJ6LqYS1oqawqmJ5ljviZyw9Ek9TKp+KcVxegJQHkol3pnb2ykJOqzCfC7i71ab0azXqUmtc7kTfUxKiYLrH5Z1RHkQMJ8V+Fd5hlrWJNJjcD9mpYX+qr/MZ5RTqrmAW4uAG8je49LE29zPorH4QVqb0m2dWUne1xa9vLf2nz9xrAjD1qlJycykhgOZBt7Dn6GWM1BXS4JPLw+9j/mV9BPvLQ4YjOutyRoTy20Pqd4xUCuCORB/vKygxItykF9PzhfE0sf0grJ+kKFrLzg7rC6siC3kUKrRETtWnbaMDdZFdInVERnSbC0CJzebT4a9oe5q/Z6h+7qkZSdlqbD2bQeoHnMVlklGgzHQSD6MyyJlnnmH+Iz06dNHph6iECq1/npgWJUX8NTbe4Njtew9Bw+ISqi1KZzIwDKeoMKiqpAK9KWbCCVlgVDUooWUigefJJkEiSTpM1pNSEMpCVdXiFKn8zgHpufoIFX7UqP8AjQnzbQfSDcaykJLVxVOmLu6r6mYI8WxdfRLgfuC35ybD9mq9TWq9utyWP+IPL6aTE9scPT0W7ny0H1lVW7aYmp4aNPL6AsZfdmPh6lbW4YAgMzHQXDEHKNxdbe8vOAdnzVVGpImUuFIBAIsMxueltPcTneXGOd5J3usBR4RxDFMA7P4joLm58gomjwPwvdRTesDZ3yAnSzanxL/Cf9M9ZxvD0GIw1SnTVAFcgqBq62+7IHkW+hl1i8GK9JludQtVP3WGot7j8zOX5csuo4fmt6kef4bsHQwop1KigqCpqADTLsfOwJB9AYdhxRw3ESlNL06iAIDsCdTa/K6ma9KS1KAFS2VlIIPpZhM3xXhPeth2pNaor2LHbKNdvVR/MZy8r7rl+S3rK/Lz6gpwPGLHRKxKnpfdfyM9apiYz4n9m6lWkcXTIz0AHI5t3ZubeeUn6TR9mOIDEYalVBvdR+k9nDl5YvVxZ+WK4Aj8s6BH2nV0Myzzn4qdnlIGKVCSxCVALDxBbIx9QMv8s9LCyHG4JatNqb/K4INtx0ZTyYGxB5ECEsfM9R1U5VU/KRUGpsL/AKi1/qOcIqU9gCCdNrWJI01G8P7V8IODqmmU1zEDU2Kj5XPkwsf/AIYDgkNspOoFxput7G3pf6ekrB/aGmc6aWBpqfLaVLCaTjFIVMPScE+G9Nva5B/p7TOLqN5SA8VOJr6x2I3kNPrIpzjygz0x1hjjSC1jFWEoQftH3G8T1R+yP1/WDs/SSpQ5sZFdWqT5CND/AFjj5aCNy/SAmPMb9Z7B2T4vgqOEpURi6JKqblm7vxElm0ex3M8hkJU3ge9YbjOHqtkpV6Tt+yrqT7C+vtJqonga9T/maDg3bDE4ewz94n7FQk/yvuv6eUivUGWKZ6j24wjKCxqITuuQtb+IaGKQZ1JMBIUk9OStMrgOH56rU2JuL7C5JB1t+s9CPw/WgHf7uoKb00Zrs1mqUxU1FrC2ZR6mZZilHHUKzi9MumcXI8N8r6gi3hM9xwVUO9XANTAdqGXNnL5q1BQaTqbWF6ZU3OvgAnLkzyl1Hm5M8pdQDhuzuDo0TWAbECk6M1rBGoVEBDhdAQA979U3GskxPD8PSxVbCtTK/aQDTZQMqq6k5QNtHAII2vb1d2U4ur91hqqmmzpXwj6AWyXNNNdnF3FiOcvuLYRTTw1etZ2w1QK7XsCrEJn0/eFN/rON3Z2422y7/ulPh8WaGMp1KiBRWw6tVXSwq0tHCgcxYSz4rQXDO2MRbDvFquFuQyFcjEjYEE5rwntLhMyd6APuXXECw0KG6118zbM3uJYU6a06SIuqHwE3v4Wvl1PqBM2Viyw/E4UOisupVxVQno3zDz0LfUQ9TYA7W5eRkfDxZcpa+XTb8J2H+9JISDp1uNfynbGa7d8Z7U6BVxDU/RgDsA97291MIo8OHiB5nS3I/wC2M6cIe8o1dyFak55EaEHy1H5y1KyY8cu9sY8Uu1f9jFmVgCGGo66WMwHYzD/Y8RiOHk6U2D0r31pPqu/TUe09JxBtqeX+mYXt4goYvB41T8zfZqm1sr+Kmx9G0/jm8Z45dN4zxy6agSQCcTlJlWeh6XAseFnQsflkGM+IfZ1a9E1ggNSmBmIF2NIXJt5rckfxTxR3dX8NPx5rjoByHoRp6GfT+SeJ/EXs8cJXNVdaRVmUcwNAwJ6KSPYr1moxkz2FIfDPSBG4qa763DL7EAf/AETMsuVj1lrwbErSqeJsy1ARUNjZM2gYenPygnFcOVckjUEg/wBJUA42lexA3gB0IEuq9K1Nd7m5HkDKVjd7SLBSpdSTKvENeXVWgxSyi+u/K52F+vlK9MIAfEc3W2gv684qxDh6OxPsOZ84TVp5fX1jr22Fo0+cCEU+cYRHsB5zjKOsimWjSZLpyjSsCPNOEx9oypIFmnZFFA2dOTpBkMISZrYbjuGz0Sea+L25/lNxwXjT1MLg8bTc95S+5qjq+HF1uTzeizj2HTTMIARY7HSS/DyrZ8Xw9rHOorUgxsO9oHMFH/ZCR/DOfLOt/Thzzrf09AODReJEFzlxBGJw9S5uKjAugJtY2cWt0yjnabSo/eqquQqV6RpsjKGOdx4L2O4IqC3kJiajM+ApVkZCcDWVRl0zU2yd2QTruwHK+U85saeJV6L1KdioQYlMiGwDXci4+Zs6Pe2tn268L87jy37h/ZJT3Co5JKtVp1Fbk2chxruLi48mlTVr1TRr4bZ8K1Nhbd6KG/uco/SXqKtPFOtwKeIQVRY2+8UBKlvUGmfYyarTCYkPYWrJ3bf96dyPqpb+WW49aW49K/hHF3OKai62QrdX/aDWKem7D1EK4JXbx06p8auw1FgfEbMPIydMGtNAF/DYC+ugOgv5QupSFRQ48LEa6a+a/WTHG6/gxl1+4IOoNiBcXHrG062ZMw6XgFbvAPu7DKVex1ut/Go6Hf6x9LEd21j8pYewfb/y0951mbpOQSWLDrMn25wT18M1Kwza5fJ1u1NvqPyE0xqBMwY2UXa/Qb/pAeKi6hlFwwuCDudwROXJev25cnc+ewPY7igxOFp1NmtldTurroynzBBmgVZhexuKSji8Thy1g5XEJf8AfuHA/iUn+ITeo4OxE9eGXljK9mGXljMnVWSWnRHATTRoWVfafgSYzDvRYa2uh2s4216cj6y4tO2gfLnFcO+FZqQphXJICnV05HP0526wMqxCo9y/hAB1JXRV9SDp9J7d8UeygrL9qRblR96ovdkA0cAasy2253HSeI1cDVpsawuC2iKcoKp0N9iBzHPXSaYD8UxAaqUU+CmLFuRtp9LiC4LAZqmdwco1HmYTRoUgCGJNyDYc8uy/p/phdbiFMKQASx0B6eggAYytmNhoB4QOQ08ZHnyv5wUIBoBH96Byv6yOpiTsAB6f3hYY6jWRkXiZ4zNCmtGNOlowmRSkTNJDI2EBXjSZyKQKKKKBr0MIQwRDCEMlbF0zK7iOJqYXE0cZS+ZGBHQleR8iCRDqZjOLYfvKLLzHiHqNZEym49L7CulVXqMENLE/cOtyMr1L1KbBeS+LJprcjzh/Zjiq0CmFrsVZK9SixuAhWsDccifvApBtsw8xMB8I+KO2fCqQGdSqEi+WomarQb0DAj6TY9rsITiKdempX7XSykHTLXUi4JbmLDp8p3nlymq8Oc8a0/EqF8Gyi+fB1CtzfN3Si1zzJNFg3mQJbcYBbDZs12RVrBhopanZj6Ai/sZFUx2WklWotixSjXAsSrZsh1G4DMR6NeP7NXWm1BjrQc0yTuUGtNiPNCsupbr/AIdXLX60sKVcVKaOtirAH6iN4bjFZqtMAg02GbTTxjNcdevvKTs7WalUqYFwL0yzUifxU2JK/QG3tHPiAmNFQOB4O5rITqdQabgeWb6GWZ61aTPVlv8AFWmQ5yGObKxty8D7C3lt7Sj41i1RxROZWIK+QX8L35WIHvA+3XEkQ0mWoFqIxDKDrYAMC1jt8pF+swnaT4lLmbIAWemEcA5rkX1B5bzPhcvhm8dy+Hp3EuLJT7uo5XKQadVSRzGh9Lhh7zC8Q+JKYal3IIcoSEa5uVBOW43va3OeX4ji+LxjWQN00udPNpbcL7EnR8Q53HhFzqdgW5TrjxfbtOKe+wtfEYvG4gVkV0tezXK6E3Nrcpdq/FKOqYioR0zZv/a8PxXHaGFBphrPTIAQKGzDT8XLf8oE3btCNKFm9dD7Tt46d5dJ6HxD4lRNncH/ALp/UWlzhPi9iR89FG9GK/0MoMRxwVBZqKDzPi/KV3EuEhaIrpUpte3gXwsCTsVJkvXy3O/T0rCfGKn/APphnH/Uqf1tLjDfFbAN8xqJ6ox/9bzwKszoQpW7t8qje3VugkuHYlytr5VF7X1YmwAl1U3i+h8R8QsB3NR0rCoyqSKYuGbYAWPK5FzyngnHcYahtaw1uBfcm5UE/hF+cJx2GOFUpV/5Htopt3ZU3KsfxaFTppoNZU1FLAN6366HQkee81GLq3oMBa5J9T/QQZqnICdrPcyP0lDGMY06dY2FNMYY9jGGRTSY2daNgcM5OzkDhEZHmNMg5FFFA1KmTo0EvrJkaZrY2m0LpGV9MyPGcTWkLDV+nT1gO7N0alLiSUqTqjVHARmJVQxOancgE/MLe89c4wofDVWK5gO7xtNqQChe8ISsubcspFRiRbRheeEVcU5tWDfeU3Vwemotb0YD6z2zh/aFFr4XEkgUK9NiQxtSQYnIK4t+IrUpXPIBztvOHL/tHi55/lGhwz1MbgqqqQGrURUQgZfvqVkqK5HUrTI6hjuBH4fidOg9HEd4TSxFAK7tv3tG2Ut5lS4PmkwlPtWmDDhWzZK2akxOWkUF0b7sG7B0todtDy1xXF+2rOMlMeFWdkB0RM7ZiEXkOkTjt/SY8eV1vp6/2u7U0aVejXpVFcoGV7N4Sv4QW2O59J5r2r7eJWqmoiDNYAW+UAdTzP8AjpMjQw+KxjaZm89kE0mC7LYegpqYqoGyi5UbC+1/XadceOTv26zCY9+1Ea+Mxr2XM1zyvb3MtafZvD4WzY2r4jqKai595PxntMFSmuDZUU5s2X51sQAHBHh387zNYjEO7ZnYs3U62m9NdvUuF/Zu4DUatGlcZqasQqvltmRza4bb6/TMdq+1wcBMKDQV1+/pZbWcW0Fxz/oPbJUK7U2DodVIYcxcc7HQyy7V8RGKqLUB3pqLEWZGF7qT+MX2PQy7vqNSTQFLbn6kxwxSgjbXnbT/ADB8fRoLSpmk7PUIBqKVIFIjTLm2a5B1kWL41XqsrVahfKLAG1gOgEppoaNQGwv+ksFwqaOHVmGtjo3v1lPw3E02W4OvQ7gwoMCv7w2PnNRlPxDgVQ2fMM7NcENqRb5QOkP7FcMDPUqtqUy5RyLC9vpY+9ouB1mqVqatvqB0Gmp9LAzY1sVRwVApRQEm5ztqWb9q3TXQRUt9MdxXELWzBwcxuMx52OxHL1mZxV6R6rt/g/3l9j6+fxr8xuW0GplFjK+Y8tNLdR0hcVdVIOo2PLpIw3KdqUyuv4T/ALaPZRbS3pI2jtGFo8tGkCBGTOTs40imXinY2BwmcMRnIHJyOMbIFORRQNE51ktMwaq/OAYnGE6LoPzP+JGtjsXxS3hTf9rp6SrvI44SAjDsL2OxBU+h0v7aH2k2Dx1dV7lLkhmsNWKk/MFGwuReBiXPBeIhKhLgC4AJ2vl535Hb1tDNEYbstXrAtUezcgfEb+fSWeB7M0qIzVVaqb2sFOQE7Bjst+rECWvDsclT5TY6+E6E26dR6SxpVipuCQevprr1lYtDsT95STxOmQDD0MudWLWdaj5rIV11GZT11knFOHCqtSiqHO1JUp06VB3XMou1R8QHKkEgXsSAbXFyZziNKnWQI1MKAxcrSC0VdipHjVV3ub5hY6mco8Kcqvdq5y+FKGAz01+a6nFVD4gDsWIabmkeaKh6a7GE0KN/SayvwVq71lq1E+2oPu8Fh1os7X8V6tUMFdlGYELmbS/rquy3ZKjQRK1dc1awOVrZKd9QMnNhzJ2O20ki26YDh3Z6tWZUp0WOYXDFSFy82LnQL5y//wD5jUbevhwLasA5A9NBf1vPUHGoYhQSPxaHKTyW2m3ORmpTsfEXtyUD6A6+mwm9M7eSYjsBjMMfuzTxKNo6o1iOhKPa/teZjH8JKsVKlGBsVIKkHoQdRPeqPEvFmQBCLi51Og/X0mB41wCvjMW1SimlQKzuxIRXtlN23NwF0Ave+kzcfpqZfbzX7EwOhmx7AvTNTuatEVnbYMpqXHPT8IHWb3hnw7wtLWuWrMNWOqUxbU2VTc+5N+ghTtSpKy0KS0k2y01Ck62uxGpPPWPFMsoD4hgsJQN6FFKdTKQ/iDZVOwXnrY/SZbjHEwTa99P9tO8erZja5FtiPmH+PKZrF4gr/wAi/wAY1HuNxHwkglatvFfzgHEKQzXXQHX06xqsuhvcdZHirk5b6coaiJn8r9R1g7qVOYbfp5R5sJwvvzHMQ0Ze+oHvB20jmNj5RryK5edvGnSK8DhnCZ0ThEBs5HWiaAwxs6TOSBRRRQCa+ILenT+8inYpFKOEUUgcI9VvOxQqfCV6lI3Rv4TqPp/aabhPabMQji5NgFJ+uV/qfF9YopEsjULTzLmU3Gl76EXsQD9fORgG9wSD1BsfYiKKXbktOB4QNncUKLPmVQ3dU0clszszMALnwb6E6XJtNTwuj4jUc5mVb7ab8vPUa+fKKKdcfhKoOK8duxsd73Jvrl5eWmkAw/EgVLLc7AAaEttuT6xRTSLBaZa7s7IqeNzvZd/lG/tLfszxaniqNOrSBFO7HKRY5lJzXtubgaxRSbX0F4/xTu1C3PiXMd9c3KZipxO4vysdf7xRRUUGJYG7chK2q2YaRRSNKjEYaxJU5TzHI+0gfFEWDix6jadikajrkHWNTSKKBHUTl129ZAOkUUjUcYxpiigK8aTOxQOAzkUUgbaciigKKKKB/9k="
        }}
        style={{
          height: 300,
          width: 300
        }}      
      />
      {/* Imagem localmente dentro do projeto */}
      <Image
        source={require('./imagens/gsxs1000.jpg')}
        style={{
          height: 300,
          width: 300
        }}
      />
      <Image
        source={require('./imagens/img.jpg')}
        style={{
          height: 300,
          width: 300
        }}
      />
      <Image
        source={require('./imagens/images.jpg')}
        style={{
          height: 300,
          width: 300
        }}
      />
    </View>

  </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textGrande: {
    fontSize: 30,
    fontWeight: 900
  }
});
